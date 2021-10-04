import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { useSelector,useDispatch } from "react-redux";
import fb from "../../../../../auth/firebase";
import { getProfile, profileSelector} from "../../../../../redux/ProfileSettings/ProfileSettings";
import { doc ,getDoc,getFirestore, updateDoc} from "firebase/firestore";
import {getAuth,updateEmail} from "firebase/auth";
import initProfile from "../initSetting/initProfile";
import { useState } from "react";
import Spiner from "../Styled/Spiner";
import {successStart} from "../../../../../redux/loader/loader";
import Success from "../Styled/Success";

const SettingProfile = () => {

    const {firstName,lastName,phone,mail} = useSelector(profileSelector)
    const [spiner,setSpiner] = useState(false)
    const [changer,setChanger] = useState(false)
    const auth = getAuth(fb).currentUser
    const dispatch = useDispatch()
    const {
      handleSubmit,
      formState: { errors },
      register,
    } = useForm({
      mode: "onTouched",
      defaultValues:{
        name:firstName,
        surname:lastName,
        phone:phone,
        email:mail
      },
      
    });
  
    const SaveProfile = async (data) => {
      setSpiner(true)
      changer && setChanger(false)
      const docRef = doc(getFirestore(fb),"users",auth.uid)
      const docSnap = await getDoc(docRef)
      const myData = docSnap.data()

      if(myData.firstName === data.name &&
        myData.lastName === data.surname &&
        myData.phone === data.phone &&
        auth.email === data.email){
          setChanger(true)
          setSpiner(false)
        }
      
      else{const userRef = doc(getFirestore(fb),"users",auth.uid)
      changer && setChanger(false)
      await updateDoc(userRef,{
        firstName: data.name,
        lastName:data.surname,
        phone:data.phone,
        initials:data.name[0] + data.surname[0],
      }).then(() => {
        dispatch(getProfile({
          firstName:data.name,
          lastName:data.surname,
          initials:data.name[0] + data.surname[0]
        }))
        dispatch(successStart())
        setSpiner(false)
      }).catch(error => {
        console.log(error);
      })
      if(auth.email !== data.email){
        await updateEmail(auth,data.email).then(() => {
          dispatch(successStart())
          setSpiner(false)
        }).catch(error => {
          console.log(error);
        })
      }
    }
    };
  
    return (
      <>
        <form className="position-relative" onSubmit={handleSubmit(SaveProfile)}>
          <Success/>
          <h2 className="mt-5 ms-4">Profile setting</h2>
          {spiner && <Spiner/>}
          <div className="d-flex flex-wrap">
            {initProfile.map((p,i) => {
              let checkError = null;
  
              if(p.naming === "name") checkError = errors.name
              else if(p.naming === "surname") checkError = errors.surname
              else if (p.naming === "phone") checkError = errors.phone
              else checkError = errors.email
  
              return <div className="forInput ms-4 mt-4 position-relative" key={i}>
              <label htmlFor={p.naming} className="form-label">
                {p.naming}
              </label>
              <input
              onFocus={changer?() => setChanger(false):null}
                type="text"
                className={`form-control ${checkError? "border-danger" : ""}`}
                {...register(p.naming, {
                  required: `${p.naming} is required`,
                  pattern: {
                    value: p.patternValue,
                    message: p.patterMessage,
                  }
                })}
              />
              <ErrorMessage
                className="form-text position-absolute top-100 start-0 text-danger"
                name={p.naming}
                as="span"
                errors={errors}
              />
            </div>
            })}
          </div>
          <button className="btn mt-5 mb-3">Save change</button>
          {changer && <div className="position-absolute start-50 translate-middle text-danger">Nothing change</div>}
        </form>
        <div className="strip my-5"></div>
      </>
    );
  };

export default SettingProfile