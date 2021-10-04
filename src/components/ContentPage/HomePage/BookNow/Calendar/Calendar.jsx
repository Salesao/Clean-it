
import React, { useState } from "react";
import Calendar from "react-calendar";
import P from "../../../../../StyledComponents/Paragraph";
import Div from "./StyledCalendar";
import Fix from "./calendarBut";
import { useDispatch, useSelector} from "react-redux";
import { orderSelector, setDate } from "../../../../../redux/CleanerAndTime/ClinerAndTime";
import styled from "styled-components";

const Span = styled.span`
font-size:20px;
font-weight: bold;
text-align:center;
color:inherit;
`

export default function CalendarApp(){
    const [date, onChange] = useState(new Date());
    const dispatch = useDispatch()
    const {day} = useSelector(orderSelector)
    const [showDay,setShowDay] = useState(day)

    
    const onClickDay = (date,e) => {
        const getData = `${date.getDate(e)}.${date.getMonth(e) + 1}.${date.getFullYear(e)}`;
        dispatch(setDate({day: getData}))
        setShowDay(getData)
    }
    
    // const formatShortWeekday = (locale, date) => 
    // ['Su', 'M', 'Tu', 'W', 'Tр', 'F', 'Sa'][date.getDay(locale)]

    return(
        <>
            <P size={"14px"}
            className={"ml-2 mb-2"}
            color={"white"}>Choose available dates:<Span>{showDay}</Span></P>
        <Div>
            <Calendar
            onChange={onChange}
            value={date}
            showNeighboringMonth={false}
            allowPartialRange={true}
            minDetail={"month"}
            next2Label={null}
            nextLabel={<Fix><div>&#8250;</div></Fix>}
            prev2Label={null}
            prevLabel={<Fix><div>&#8249;</div></Fix>}
            tileClassName={"test"}
            locale={"en"}
            className={"test2"}
            // formatShortWeekday={formatShortWeekday}
            onClickDay={onClickDay}
            minDate={new Date()}
            />
        </Div>
        </>
    )
}
