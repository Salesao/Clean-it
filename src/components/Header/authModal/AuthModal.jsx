
import { Link, useHistory } from "react-router-dom";
import "./AuthModal.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setModalActive } from "../../../redux/loader/loader";


export default function AuthModal() {
  const history = useHistory();
  const [state,setState] = useState(false)
  const [loader,setLoader] = useState(false)
  const dispatch = useDispatch()

  const {handleSubmit,register,formState:{errors},reset} = useForm({
    mode:"onSubmit"
  })

  
    const onSubmit = (data) => {
      setLoader(true)
      state && setState(false)
      signInWithEmailAndPassword(getAuth(),data.email,data.password)
      .then(async () => {
        setTimeout(() => {
          reset()
          setLoader(false)
          dispatch(setModalActive())
          state && setState(false)
        },1000)
      })
      .catch(error => {
        setTimeout(() => {
          setLoader(false)
          console.log(error.message);
          setState(true)
        },1000)
      })


    }
  return (
    <div>
      <div
        className="closeModal"
        onClick={() => {
          dispatch(setModalActive())
          reset();
          setState(false)
        }}
      >
        ×
      </div>

      <form
        className="myFormTest"
        action="#"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <span>Sing in to account</span>
          <label className="form-label" htmlFor="email">
            Email address
          </label>
        <div className="form-floating mb-4 position-relative">
          <input
            disabled={loader?true:false}
            type="email"
            className={`form-control ${
              errors.email ? "is-invalid" : ""
            }`}
            placeholder="Enter email"
            {...register("email",{required:"Email is required",
          pattern:{value:/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,message:"Invalid email format"}})}
          />
          <label htmlFor="email">Enter your email</label>
          <ErrorMessage as="h4" errors={errors} name="email" className="invalid-feedback form-text position-absolute start-0 top-100" />
        </div>
          <label className="form-label mt-3" htmlFor="password">
            Password
          </label>
        <div className="form-floating mb-4 position-relative">
          <input
            disabled={loader?true:false}
            type="password"
            placeholder="Enter password"
            className={`form-control ${
              errors.password ? "is-invalid" : ""
            }`}
            {...register("password",{required:"Password is required",
          minLength:{value:8,message:"Minimum 8 letter"}})}
          />
          <label htmlFor="password">Enter your password</label>
          <ErrorMessage as="h4" errors={errors} name="password" className="invalid-feedback form-text position-absolute start-0 top-100"/>
          
          <Link to="" style={{top:"-1.1rem"}} className="label-link position-absolute">
            Forgot password?
          </Link>
        </div>
        <button disabled={loader?true:false} type="submit" className="btn btn-login mt-4 mb-3">
          Sign in
        </button>
        {state && <div className="position-relative d-flex justify-content-center"><div className="position-absolute text-danger errorSignIn">Sign failed (not correct email or password)</div></div>}
        {loader && <div className="d-flex justify-content-center position-relative">
  <div className="spinner-border text-warning position-absolute" style={{width:"2rem",height:"2rem"}} role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>}
      </form>
      <div className="modalFooter">
        <span>
          New to <b>Clean It</b>?
        </span>
        <button
          onClick={() => {
            dispatch(setModalActive())
            history.push("/reg/user");
            reset()
            state && setState(false)
          }}
        >
          Create an account
        </button>
      </div>
    </div>
  );
}
