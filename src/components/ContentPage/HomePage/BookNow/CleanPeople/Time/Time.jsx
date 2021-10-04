
import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { orderSelector, setTime } from "../../../../../../redux/CleanerAndTime/ClinerAndTime";


export default function Clock({key}){
    const {day} = useSelector(orderSelector)
    let [clock,ChangeCLock] = useState(null)
    const dispatch = useDispatch()
    const ToDay = `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`
    const getHours = new Date().getHours()

    const timer = [
        {test:"09:00",number:9},
        {test:"12:00",number:12},
        {test:"15:00",number:15},
        {test:"17:00",number:17},
    ]

  return <div className="time d-flex flex-wrap">
      {timer.map((t,i) => {
        return <button key={i}
        className={`${(clock === t.number && day !== ToDay) || 
        (getHours < t.number && clock === t.number)? "activeTime" : ""}
        ${i === 1 || i === 3?"ms-2":""}
        ${i > 1?"mt-1":""}`}
        disabled={day === ToDay && getHours >= t.number?true:false}
        onClick={() => {
          ChangeCLock((clock = t.number));
          dispatch(setTime({ time: t.test}));
        }}
      >
        {t.test}
      </button>;
      })}
  </div>
}