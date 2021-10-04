import React from "react";
import styled from "styled-components";


const Div = ({children}) => {
    return <CalendarStyled>
        {children}
    </CalendarStyled>
}

export default Div;


const CalendarStyled = styled.div`
    width:492px;
    background:white;
    max-height:63%;
    border-radius:30px;


& .react-calendar__month-view__weekdays{
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    list-style: none;
    border: 0;
    text-decoration: none;
}
& .react-calendar__navigation__label{
    height: 4.1rem;
    margin-top: auto;
    border-style: none;
    background: transparent;
    opacity: 1;
}
& .react-calendar__navigation__label__labelText{
    font-size: 20px;
    font-weight: bold;
}
& .test{
    background: transparent;
    font-size: 16px;
    font-weight: bold;
    border: 0;
    padding: 18px 0;
}
& .test:hover:disabled{
    background-color: transparent;
    cursor: default;
}
& .test:disabled{
    opacity: 0.2;
}
& .test:hover{
    background-color: #6882ef;
    cursor: pointer;
}
& .test2{
    position: relative;
    padding: 0 50px;
}
& .test2 .react-calendar__navigation__arrow{
    position: absolute;
    border-style: none;
    background: transparent;
}
& .react-calendar__navigation__next-button{
    right: 4%;
    bottom: 4%;
    height: 83%;

}
& .react-calendar__navigation__prev-button{
    left: 4%;
    bottom: 4%;
    height: 83%;
}
& .react-calendar__viewContainer{
    margin: 0 5%;
    height: 100%;
}
& .react-calendar__month-view__days{
    max-height: 80%;
    margin-bottom: 8%;
}
& .react-calendar__tile--active{
    background-color: #FFD836;
}
& abbr{
    text-decoration:none;
}
& .fix{
    height:100%;
}
`