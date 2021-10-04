import React from "react";
import styled from "styled-components";

const StyledLable = styled.label`
display:flex;
flex-wrap:wrap;
align-items:center;
position:relative;

& .info h1{
    font-size:24px;
    font-weight:bold;
}
& .info button{
    border-radius:25px;
    background:#ffd836;
    outline:none;
    border:1px solid #ffd836;
    cursor:default;
}
& span{
    font-weight:bold;
}
& .time{
    width:8rem;
}

& .time button{
    height:1.5rem;
    margin-bottom:3px;
    width:3.2rem;
    border:1px solid black;
    outline:none;
    background:transparent;
    font-weight:bold;
}

& .time .activeTime{
    background:#ffd836;
    border:none;
}
& #toggle{
    position:absolute;
    left:-100vh;
}

& button:disabled{
    border:1px solid rgba(0,0,0,0.2)
}
`

const Lable = ({children}) => {
    return <StyledLable>
        {children}
    </StyledLable>
}

export default Lable;