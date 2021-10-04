import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import fb from "../../../../auth/firebase";
import { useDate } from "./DataContext";
import cardAvatar from "../../../../img/ImgForCard/CardImg";
import { ErrorMessage } from "@hookform/error-message";
import { useHistory } from "react-router";
import Div from "../ContainerRegistration/StyledContainer/StyledConteiner";
import swal from "sweetalert";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "../../../../redux/loader/loader";
import { getFirestore,collection,addDoc } from "firebase/firestore";
import { getStorage,ref,uploadBytes } from "firebase/storage";

const Step3 = () => {
  const { data } = useDate();
  const dispatch = useDispatch();
  const { push } = useHistory();
  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      hasExperience: data.hasExperience,
      beforeExperience: data.beforeExperience,
    },
  });

  const onSubmit = async dd => {
    const mergeForm = Object.assign(data,dd)
    dispatch(startLoading());
    const newCliner = await addDoc(collection(getFirestore(fb),"cliner"),mergeForm)
    const fileRef = ref(getStorage(),`Clianers/${newCliner.id}`);
    uploadBytes(fileRef,file).then(() => {
      console.log("file download in the API");
      dispatch(stopLoading());
      swal("Great job!", "We will contact you soon", "success", {
        button: {
          text: "Ok",
          className: "btn-primary",
        },
      });
      push("/");
      reset(data)
    }).catch(error => {
      dispatch(stopLoading());
      console.log(error);
    })
  };

  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  let [value, setValue] = useState();

  useEffect(() => {
    if (!file) return setPreview(undefined);
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const changeFile = (e) => {
    if (!e.target.files || e.target.files.length === 0)
      return setFile(undefined);
    setFile(e.target.files[0]);
  };

  const hasExperience = watch("hasExperience");

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column content">
          <div className="input-wrapper mt-5">
            <input
              accept=".jpg, .png"
              onChange={changeFile}
              type="file"
              id="picture"
              className="input__file"
            />
            <label htmlFor="picture" className="input__file-button btn-primary">
              <span className="input__file-icon-wrapper">
                <img
                  className="input__file-icon"
                  src={cardAvatar.addPhoto}
                  alt=""
                />
              </span>
              <span className="input__file-button-text">Choice your photo</span>
            </label>
          </div>
          <img
            className="my-4 img"
            src={file ? preview : cardAvatar.noAvatar}
            alt=""
          />
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              {...register("hasExperience")}
            />
            <label htmlFor="hasExperience" className="form-label pt-1">
              Did you working cleaner?
            </label>
          </div>
          {hasExperience && (
              <div className="form-floating my-4">
                <textarea
                  placeholder="beforeExperience"
                  value={value}
                  onChange={(e) => setValue((value = e.target.value))}
                  className={`form-control ${
                    errors.beforeExperience ? "is-invalid" : ""
                  }`}
                  {...register("beforeExperience")}
                  style={{ height: "13rem" }}
                />
                <label htmlFor="beforeExperience">
                  Tell about your experience:
                </label>
                <ErrorMessage
                  className="invalid-feedback form-text"
                  name="beforeExperience"
                  errors={errors}
                  as="h4"
                />
              </div>
          )}

          <Div
            style={{ textAlign: "center" }}
            backColor={"#ffc107"}
            borderColor={"#ffc107"}
            hoverBackgroundColor={"#ffd836"}
            hoverBorderColor={"#ffd836"}
            className="mt-auto mb-5"
          >
            <button
              title="You most choice photo"
              style={{ color: file ? "" : "white" }}
              className={`btn btn-warning ${file ? "" : "disabled"}`}
            >
              {file?"Send your form":"You must choice photo"}
            </button>
          </Div>
          {/* <button className="btn btn-primary mb-5 align-self-center mt-auto">
          Next Step
        </button> */}
        </div>
      </form>
  );
};

export default Step3;
