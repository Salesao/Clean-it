import React from "react";
import styled from "styled-components";

const StyledSelect = styled.div`
& .testing{
    width:20rem;
    max-height:10%;
    font-size:1.6rem;
}
& .control__control{
    height:3.5rem;
    background:transparent;
    outline:none;
    border:3px solid #F9D859;
    text-align:center;
    display:flex;
    align-items:center;
}
& .control__control:hover{
    border-color:#F9D859;
}
& .control__value-container{
    padding-left:10px;
}
& .control__single-value{
    color:#F9D859;
    font-weight:bold;
}
& .control__indicator-separator{
    display:none;
}

& .control__indicator svg{
    height:2rem;
    width:2rem;
    cursor:pointer;
    color:#F9D859;
    transition:0.3s;
}
& .control__indicator svg:hover{
    color:white;
}
& .control__single-value{
    padding-bottom:3px;
}

`

const Select = ({children}) => {
    return <StyledSelect>
        {children}
    </StyledSelect>
}

export default Select