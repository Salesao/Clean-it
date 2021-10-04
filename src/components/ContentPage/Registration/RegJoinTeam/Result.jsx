import { useDate } from "./DataContext";
import { useForm } from "react-hook-form";
import Div from "../ContainerRegistration/StyledContainer/StyledConteiner";

const Result = () => {
  const { data } = useDate();
  const { picture, hasExperience } = data;
  const entry = Object.entries(data).filter((e) =>
    hasExperience !== true
      ? e[0] !== "hasExperience" &&
        e[0] !== "beforeExperience" &&
        e[0] !== "picture"
      : e[0] !== "picture" &&
        e[0] !== "hasExperience"
  );
  
  const { handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(picture);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="mt-4">Did you fill in the information correctly?</h1>
      <fieldset disabled className="d-flex flex-column flex-wrap content">
        {entry.map((e) => (
          <div className="mt-4 mx-4" key={e[0]}>
            <label htmlFor="result" className="form-label info">
              {e[0]}
            </label>
            <input
              className="form-control"
              type="text"
              id="result"
              value={e[1].toString()}
            />
          </div>
        ))}
      </fieldset>

      <Div
        style={{ textAlign: "center" }}
        backColor={"#ffc107"}
        borderColor={"#ffc107"}
        hoverBackgroundColor={"#ffd836"}
        hoverBorderColor={"#ffd836"}
      >
        <button className="btn btn-warning my-5">Send your form</button>
      </Div>
    </form>
  );
};

export default Result;
