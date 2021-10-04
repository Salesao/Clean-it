
import { useEffect, useState } from "react";
import Close from "./close";
import EmptyOrders from "./EmptyOrders";
import { getFirestore,getDoc,doc, updateDoc} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import fb from "../../../../auth/firebase";
import Spiner from "../ProfileSettings/Styled/Spiner";
import Swal from "sweetalert2";



export default function ProfileOrders() {
  const [state,setState] = useState([])
  const [emptyLoad,setEmptyLoad] = useState(true)
  const [empty,setEmpty] = useState(false)

  useEffect(() => {
    let clearFunction = false
    if(getAuth().currentUser !== null){
      const orderCliner = doc(getFirestore(fb),"orders",getAuth().currentUser.uid)
      getDoc(orderCliner).then(async (ref) => {
        if((await getDoc(orderCliner)).exists() && !clearFunction){
          setEmptyLoad(false)
          setState(ref.data().orders)
        }else if(!clearFunction){
          setEmpty(true)
          setEmptyLoad(false)
        }
      }).catch(error => {
        console.log(error);
      })
      return () => clearFunction = true
    }
  })
  function remove(id){
    const getOrders = doc(getFirestore(fb),"orders",getAuth().currentUser.uid)
    getDoc(getOrders).then(ref => {
      const massiv = ref.data().orders
      updateDoc(getOrders,{orders:massiv.filter(o => o.id !== id)})
    })
  }
  
  return (
    
      <ul style={{overflowY:!state.length?"auto":"scroll"}} className="border mt-5 position-relative">
        {emptyLoad && <Spiner/>}
        {empty || (!state.length && !emptyLoad)?<EmptyOrders/>:""}
        
        {state.map((o,i) => {
        
        return<div key={o.id}>
        {i > 0 && <div className="strip my-3"></div>}
        <li className={`px-3 ${i === 0?"mt-3":""} ${i === state.length - 1?"mb-2":""} d-flex justify-content-center align-items-center`}>
          <img className="flex-grow-1" style={{width:"70px",height:"70px",borderRadius:"50px"}} src={o.img} alt=""/>
          <div style={{maxWidth:"380px"}} className="info-clean d-flex flex-column ms-3">
            <div className="d-flex"><h3>{o.name}</h3>,<h3>{o.expert}</h3></div>
            <div className="d-flex my-1">
              <h3><span className="dateAndCount">{o.day}</span>,&nbsp;</h3>
              <h3><span className="timeAndCount">{o.time}</span>,&nbsp;</h3>
              <h3>{o.expert === "Windows cleaning"?"Windows:":"Rooms:"} <span className="dateAndCount">{o.count1}</span>,&nbsp;</h3>
              <h3>{o.expert === "Windows cleaning"?"Balconies:":"Bathrooms:"}<span className="timeAndCount">{o.count2}</span>.</h3>
            </div>
            <div className="d-flex flex-wrap">
              <h3>St.<span>{o.street}</span>,&nbsp;</h3>
              <h3>Entrance:<span>{o.entrance}</span>,&nbsp;</h3>
              <h3>Flat:<span>{o.flat}</span>,</h3>
              <h3>Floor:<span>{o.floor}</span>,</h3>
              {o.intercom !== "" &&
              <h3>Intercom:<span>{o.intercom}</span>.</h3>
              }
            </div>
          </div>
          <div className="delete" onClick={() => {
            Swal.fire({
              title:"Do you sure delete order?",
              icon:"error",
              showDenyButton:true,
              showConfirmButton:false,
              denyButtonText:"Delete",
              showCancelButton:true,
              cancelButtonColor:"#0b5ed7"
            }).then(result => {
              if(result.isDenied){
                remove(o.id)
              }
            })
          }}>
          <Close/>
          </div>
        </li>
        </div>
        })}
      </ul>
  );
}