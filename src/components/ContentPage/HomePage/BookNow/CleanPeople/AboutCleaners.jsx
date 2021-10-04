
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthSelector } from "../../../../../redux/AuthHandler/AuthHandler";
import { orderSelector, setCleaner, setTime} from "../../../../../redux/CleanerAndTime/ClinerAndTime";
import { setModalActive } from "../../../../../redux/loader/loader";
import Button from "../../../../../StyledComponents/Button";


export default function AboutMe({about,expert,name,img,id}){


    const dispatch = useDispatch()
    const {authHandler} = useSelector(AuthSelector)
    const {time,day} = useSelector(orderSelector)
    const [errorTime,setErrorTime] = useState(false)
    var order = {time:time,name:name,expert:expert,img:img,day:day}
    
    return(
        <div className="pt-4 about position-relative">
            {errorTime && <div style={{width:"9rem",textAlign:"center",fontWeight:'bold'}} className="position-absolute end-0 top-0 align-center text-danger">Choice time</div>}
            <textarea style={{lineHeight:"1.2rem"}} className="px-3" defaultValue={about} readOnly/>
            {authHandler
            ?<Link to={time === null?"":`/order`}><Button width={"140px"}
            onClick = {() => {
                time === null
                ?setErrorTime(true)
                :dispatch(setCleaner({expert:expert,name:name,img:img,id:id}))
                localStorage.setItem("order",JSON.stringify(order))
                dispatch(setTime({time:null}))
            }}>Clean it</Button></Link>
            :<Button width={"140px"}
            onClick= {() => {
                dispatch(setModalActive({modalActive: true}))
            }}>Clean it</Button>}
        </div>
    )
}