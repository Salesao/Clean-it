import { ErrorMessage } from "@hookform/error-message";




const Input = ({naming,checkError,type = "text",label,patter = null,
patternMessage = null,require = `${label} is required`,
maxLength = null,MaxLengthMessage = null,minLength = null,minLengthMessage = null,
min = null,max = null, minMessage = null,maxMessage = null, className = "mt-4",
register,errors}) => {


  return <div className="position-relative mt-2">
    <label htmlFor={naming} className={`form-label ${className}`}>Your {label}</label>
    <div className="form-floating">
      <input type={type}
      className={`form-control ${checkError?"is-invalid":""}`}
      placeholder={naming}
      {...register(naming,{required: require,
      pattern:{value:patter,message:patternMessage},
      maxLength:{value:maxLength,message:MaxLengthMessage},
      minLength:{value:minLength,message:minLengthMessage},
      min:{value:min,message:minMessage},
      max:{value:max,message:maxMessage}

    })}/>
      <label htmlFor={naming}>Enter {label}</label>
      {require !== false && <ErrorMessage className="invalid-feedback form-text position-absolute start-0 top-100"  name={naming} as="span" errors={errors}/>}
  </div>
  </div>
}

export default Input;
