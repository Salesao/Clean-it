import { useForm } from "react-hook-form";
import Input from "../ContainerRegistration/UniversalInput";
import Div from "../ContainerRegistration/StyledContainer/StyledConteiner";
import fb from "../../../../auth/firebase";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../../../redux/loader/loader";
import swal from "sweetalert";
import { useHistory } from "react-router";
import { useState } from "react";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { doc,setDoc,getFirestore } from "firebase/firestore";

const style = {
  maxWidth: "45rem",
  minWidth: "20rem",
  margin: "0 auto",
  height: "80vh",
};

export default function RegistrationUser() {
  let [hasAccount,ShowHasAccount] = useState(false)
  const dispatch = useDispatch()
  const {push} = useHistory()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    
    mode: "onTouched",
  });
  const submit = data => {
    hasAccount && ShowHasAccount(false)
    dispatch(startLoading())
    createUserWithEmailAndPassword(getAuth(fb),data.mail,data.password)
    .then(async (resp) => {
      await setDoc(doc(getFirestore(fb),"users",resp.user.uid),{
        firstName:data.firstName,
        lastName:data.lastName,
        phone:data.phone,
        initials:data.firstName[0] + data.lastName[0],
        password:data.password
      })
        reset()
        swal('Cool!!!','You create your account in the "Clean it" ',"success",{
          button: {
            text:"Awesome",
            className:"btn-primary",
          }
        })
        dispatch(stopLoading())
        push("/")
    }).catch((error) => {
      dispatch(stopLoading())
      ShowHasAccount(true)
      console.log(error.message);
    })
  };

  return (
    <Div
      className="container bg-white shadow-lg "
      backColor={"#f9d859"}
      borderColor={"#f9d859"}
      hoverBackgroundColor={"#ffc107"}
      hoverBorderColor={"#ffc107"}
    >
      <form onSubmit={handleSubmit(submit)}>
        <div className="d-flex flex-column" style={style}>
          <Input
            errors={errors}
            register={register}
            naming="firstName"
            checkError={errors.firstName}
            label="name"
            patter={/^[a-zA-Z][a-zA-Z-_]{0,31}$/}
            patternMessage="Only string"
            maxLength={30}
            MaxLengthMessage="Name too long"
            className="mt-5"
          />
          <Input
            errors={errors}
            register={register}
            naming="lastName"
            checkError={errors.lastName}
            label="last name"
            patter={/^[a-zA-Z][a-zA-Z-_]{0,31}$/}
            patternMessage="Only string"
            maxLength={30}
            MaxLengthMessage="Last Name too long"
          />
          <Input
          errors={errors}
          register={register}
          naming="phone"
          checkError={errors.phone}
          label="phone number"
          patter={/^\+?\d{10,15}$/}
          patternMessage="your number invalid format"/>

          <Input
            errors={errors}
            register={register}
            naming="mail"
            checkError={errors.mail}
            label="email address"
            patter={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
            patternMessage="Invalid email address format"
          />
          <Input
            errors={errors}
            register={register}
            naming="password"
            type="password"
            checkError={errors.password}
            minLength={8}
            minLengthMessage="Password too short(minimum 8 letter)"
            label="password"
          />
          <button className="btn btn-warning mt-5">Register</button>
          {hasAccount && <div className="mt-4 text-danger errorSignIn">This email address already exists.</div>}
        </div>
      </form>
    </Div>
  );
}
