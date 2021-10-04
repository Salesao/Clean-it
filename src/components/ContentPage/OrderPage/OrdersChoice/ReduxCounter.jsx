
import { useDispatch, useSelector } from "react-redux"
import { countSelector,decrementCount1,decrementCount2,incrementCount1,incrementCount2} from "../../../../redux/CountsRoomAndBathroom/count"


const RoomsAndBathroom = ({expert}) => {
    const dispatch = useDispatch()
    const {count1,count2} = useSelector(countSelector)
    const clean = "Windows cleaning"
    return(
            <div className="justify-content-between d-flex counts">
            <div className="d-flex justify-content-between count">
                <button className="btn btn-warning" onClick={count1 !== 1?
                () => dispatch(decrementCount1()):null}>-</button>
                <p className="flex-grow-1 align-self-center">{count1} {expert !== clean
                ?count1 > 1?"Rooms":"Room"
                :count1 > 1?"Windows":"Window"}</p>
                <button className="btn btn-primary" onClick={() => 
                expert !== clean?
                count1 !== 5?dispatch(incrementCount1()):null
                :count1 !== 30?dispatch(incrementCount1()):null}>+</button>
            </div>
            <div className="d-flex justify-content-between count">
                <button className="btn btn-warning" onClick={count2 !== 1?
                () => dispatch(decrementCount2()):null}>-</button>
                <p className="flex-grow-1 align-self-center">{count2} {expert !== clean
                ?count2 > 1?"Bathrooms":"Bathroom"
                :count2 > 1?"Balconies":"Balcony"}</p>
                <button className="btn btn-primary" onClick={() => 
                expert !== clean
                ?count2 !== 5?dispatch(incrementCount2()):null
                :count2 !== 10?dispatch(incrementCount2()):null}>+</button>
            </div>
            </div>
    )
}
export default RoomsAndBathroom