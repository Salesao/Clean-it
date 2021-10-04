import { setDoc,getFirestore, doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import fb from "../../../../../auth/firebase";
import { clearOrder} from "../../../../../redux/CleanerAndTime/ClinerAndTime";
import { countSelector, defaultChet } from "../../../../../redux/CountsRoomAndBathroom/count";
import Input from "../../../Registration/ContainerRegistration/UniversalInput";
import Live from "./InitLive";
import { AuthSelector } from "../../../../../redux/AuthHandler/AuthHandler";
import { startLoading, stopLoading } from "../../../../../redux/loader/loader";
import { useHistory } from "react-router";
import swal from "sweetalert";


const LiveUser = () => {
    const {register,formState:{errors},handleSubmit,reset} = useForm({
        mode:"onTouched"
    })
    const {push} = useHistory()
    const dispatch = useDispatch()
    const {authHandler} = useSelector(AuthSelector)
    const {count1,count2} = useSelector(countSelector)
    const userOrder = JSON.parse(localStorage.getItem("order"))

    function sendOrder(){
        dispatch(stopLoading())
        dispatch(clearOrder())
        dispatch(defaultChet())
        swal("Cliner order!!!","You can check your order in the profile","success",
        {
            button:{
                text:"Ok",
                className:"btn btn-primary",
            }
        })
        push("/")
        reset()
        localStorage.removeItem("order")
    }

    const infoCleaner = {
        name:userOrder.name,
        expert:userOrder.expert,
        time:userOrder.time,
        day:userOrder.day,
        count1:count1,
        count2:count2,
        img:userOrder.img,
        id:Math.floor(Math.random() * 1000),
    }

    const onSubmit = async data => {
        dispatch(startLoading())
        const merge = Object.assign(data,infoCleaner)
        const orderRef = doc(getFirestore(fb),"orders",authHandler)
        const existDoc = await getDoc(orderRef)
        if(existDoc.exists()){
            await updateDoc(orderRef,{orders:arrayUnion(merge)}).then(() => {
                sendOrder()
            }).catch(error => {
                console.log(error);
            })
        }else{
            setDoc(orderRef,{orders:[merge]},{merge:true}).then(() => {
                sendOrder()
            }).catch(error => {
                console.log(error);
            })
        }
        
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
            errors={errors}
            register={register}
            naming="street"
            checkError={errors.street}
            label="Street"
            />
            <div className="d-flex flex-wrap mb-4 justify-content-center">
                {Live.map((l,i) => {
                    let checkError
                    if(l.name === "house") checkError = errors.house
                    else if(l.name === "flat") checkError = errors.flat
                    else if(l.name === "entrance") checkError = errors.entrance
                    else if(l.name === "floor") checkError = errors.floor

                    return (
                        <div className={`position-relative ${i !== 0 && i !== 2 && i !== Live.length - 1?"ms-5":""} mt-4`} key={i}>
                            <label htmlFor={l.name} className="form-label">{l.name}</label>
                            <input type="number"
                            placeholder={i === Live.length - 1?"If there":""}
                            className={`form-control ${checkError?"border-danger":""}`}
                            {...register(l.name,{required:l.name !== "intercom"?`${l.name} is required`:false,
                            maxLength:{value:3,message:"Invalid format"}})}/>
                            {i !== Live.length - 1 && <ErrorMessage
                            className="form-text position-absolute text-danger"
                            name={l.name}
                            as="span"
                            errors={errors}
                            />}
                        </div>
                    )
                })}
            </div>
            <div className="d-flex justify-content-center" >
            <button className="send btn mt-5 btn-warning">Send order</button>
            </div>
        </form>
    )
}

export default LiveUser