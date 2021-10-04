import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDate } from "./DataContext";
import { useHistory } from "react-router";
import Input from "../ContainerRegistration/UniversalInput";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../../../redux/loader/loader";

const style = {
  maxWidth: "100%",
  minWidth: "20rem",
  height: "80vh",
  margin: "0 5rem",
};

const Step2 = () => {
  const { setValues, data } = useDate();
  const { push } = useHistory();
  const dispatch = useDispatch();
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      specialty: data.specialty,
      age: data.age,
      about: data.about,
      jobPhone: data.jobPhone,
      jobMail: data.jobMail,
      telegram: data.telegram,
    },
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    dispatch(startLoading());
    setTimeout(() => {
      dispatch(stopLoading());
      setValues(data);
      push("/reg/team/step3");
    }, 1000);
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex justify-content-between mt-5" style={style}>
          <div
            className="d-flex flex-column"
            style={{ minWidth: "35rem", maxWidth: "15rem" }}
          >
            <h1>Personal information</h1>

            <label htmlFor="specialty" className="form-label mt-5">
              Your specialization
            </label>
            <div className="form-floating">
              <select
                className="form-select pb-1"
                {...register("specialty", { required: true })}
              >
                <option value="Regularly cleaning">Regularly cleaning</option>
                <option value="Deep cleaning">Deep cleaning</option>
                <option value="Office cleaning">Office cleaning</option>
                <option value="Windows cleaning">Windows cleaning</option>
              </select>
              <label htmlFor="specialty">Specializations</label>
            </div>

            <Input
              checkError={errors.age}
              register={register}
              errors={errors}
              naming="age"
              label="age"
              min={18}
              minMessage="You too young"
              max={99}
              maxMessage="You dead"
              patter={/^[0-9]+$/}
              patternMessage="Only number"
            />

            <label htmlFor="about" className="form-label mt-5">
              About(min 20 letters)
            </label>
            <div className="form-floating position-relative">
              <textarea
                placeholder="about"
                className={`form-control ${errors.about ? "is-invalid" : ""}`}
                style={{ height: "20rem" }}
                {...register("about", {
                  required: "About is required",
                  minLength: { value: 20, message: "Too short about you" },
                })}
              />
              <label htmlFor="about">Tell about yourself</label>
              <ErrorMessage
                name="about"
                errors={errors}
                className="invalid-feedback form-text position-absolute start-0 top-100"
                as="span"
              />
            </div>
          </div>
          <div
            className="d-flex flex-column"
            style={{ minWidth: "22rem", maxWidth: "15rem" }}
          >
            <h1>Your Contacts for Clients</h1>
            <Input
              register={register}
              checkError={errors.jobPhone}
              errors={errors}
              naming="jobPhone"
              label="phone for clients"
              patter={/^\+?\d{10,15}$/}
              patternMessage="your number invalid format"
            />
            <Input
              register={register}
              checkError={errors.jobMail}
              errors={errors}
              naming="jobMail"
              label="email address for client"
              patter={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
              patternMessage="invalid email address format"
            />
            <Input
              register={register}
              errors={errors}
              require={false}
              naming="telegram"
              label="telegram"
            />
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="btn btn-primary mb-5">Next step</button>
        </div>
      </form>
  );
};

export default Step2;
