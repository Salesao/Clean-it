import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Input from "../ContainerRegistration/UniversalInput";
import { useDate } from "./DataContext";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../../../redux/loader/loader";

const Step1 = () => {
  const { setValues, data } = useDate();
  const { push } = useHistory();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: data.name,
      surname: data.surname,
      mail: data.mail,
      phone: data.phone,
      password: data.password,
    },
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    dispatch(startLoading());
    setTimeout(() => {
      dispatch(stopLoading());
      setValues(data);
      push("/reg/team/step2");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex flex-column content">
        <Input
          errors={errors}
          register={register}
          naming="name"
          checkError={errors.name}
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
          naming="surname"
          checkError={errors.surname}
          label="surname"
          patter={/^[a-zA-Z][a-zA-Z-_]{0,31}$/}
          patternMessage="Only string"
          maxLength={30}
          MaxLengthMessage="Surname too long"
        />
        <Input
          register={register}
          checkError={errors.phone}
          errors={errors}
          naming="phone"
          label="phone number"
          patter={/^\+?\d{10,15}$/}
          patternMessage="your number invalid format"
        />
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
          minLengthMessage="Password too short(min 8 letter)"
          label="password"
        />
        <button className="btn btn-primary mt-5">Next step</button>
      </div>
    </form>
  );
};

export default Step1;
