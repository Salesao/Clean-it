import { ErrorMessage } from "@hookform/error-message";

const PasswordInput = ({naming,checkError,invalid,errors,register,
    messageInvalid,minLength = null,mess = null,label,className = ""}) => {

    return(
        <div className={`position-relative forInput ${className}`}>
            <label htmlFor={naming} className="form-label">
              {label} password
            </label>
            <input
              type="password"
              className={`form-control ${checkError || invalid?"border-danger":""}`}
              {...register(naming, { required: "Password is required",
            minLength:{value:minLength,message:mess}})}
            />
            {invalid && <h6 className="text-danger mt-1">{messageInvalid}</h6>}
            <ErrorMessage
              className="form-text position-absolute top-100 start-0 text-danger"
              name={naming}
              as="span"
              errors={errors}
            />
          </div>
    )
}

export default PasswordInput