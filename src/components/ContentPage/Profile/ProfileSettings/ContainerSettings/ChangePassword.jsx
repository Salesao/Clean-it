
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import fb from "../../../../../auth/firebase";
import {
  setPassword,
  profileSelector,
} from "../../../../../redux/ProfileSettings/ProfileSettings";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { getAuth, updatePassword } from "firebase/auth";
import { useState } from "react";
import Spiner from "../Styled/Spiner";
import { successStart } from "../../../../../redux/loader/loader";
import PasswordInput from "../initSetting/InputPassword";

const ChangePassword = () => {
  const [invalid, setInvalid] = useState(false);
  const [notCorrect, setCorrect] = useState(false);
  const [spiner, setSpiner] = useState(false);
  const auth = getAuth(fb).currentUser;
  const { password } = useSelector(profileSelector);
  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    mode: "onSubmit",
  });

  const SavePassword = async (data) => {
    setSpiner(true);
    invalid && setInvalid(false);
    notCorrect && setCorrect(false);

    if (data.yourPassword !== password) setCorrect(true);
    else if (data.newPassword !== data.repeatPassword) setInvalid(true);
    else {
      const passwordRef = doc(getFirestore(fb), "users", auth.uid);
      await updateDoc(passwordRef, {
        password: data.newPassword,
      })
        .then(async () => {
          await updatePassword(auth, data.newPassword)
            .then(() => {
              reset();
              dispatch(successStart());
            })
            .catch((error) => {
              console.log(error);
            });
          dispatch(
            setPassword({
              password: data.newPassword,
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setSpiner(false);
  };

  return (
    <form className="position-relative" onSubmit={handleSubmit(SavePassword)}>
      <h2 className="mb-4 ms-4 mt-3">Change password</h2>
      {spiner && <Spiner />}
      <div
        onFocus={
          notCorrect || invalid
            ? () => {
                notCorrect && setCorrect(false);
                invalid && setInvalid(false);
              }
            : null
        }
        className="ms-4 position-relative"
      >
        <div className="d-flex mb-4">
          <PasswordInput
            naming="yourPassword"
            label="Your"
            checkError={errors.yourPassword}
            errors={errors}
            register={register}
            invalid={notCorrect}
            messageInvalid="Password invalid"
          />

          <PasswordInput
            errors={errors}
            register={register}
            naming="newPassword"
            label="New"
            checkError={errors.newPassword}
            minLength={8}
            mess="Password too short"
            className="ms-4"
          />
        </div>

        <div className="d-flex">
          <div className="mt-4 align-self-center recover">
            <Link to="/">Recover password</Link>
          </div>

          <PasswordInput
            errors={errors}
            register={register}
            naming="repeatPassword"
            label="Repeat"
            checkError={errors.repeatPassword}
            invalid={invalid}
            messageInvalid="Not Equals password"
            className="ms-4"
          />
        </div>
      </div>
      <button className="btn mt-5">Save change</button>
    </form>
  );
};

export default ChangePassword;
