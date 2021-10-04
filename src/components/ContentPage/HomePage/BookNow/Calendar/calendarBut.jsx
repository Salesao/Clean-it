import React from "react";
import styled from "styled-components";

export const StyledButton = styled.div`
    background: transparent linear-gradient(90deg, #8da3ff 0%, #6781ef 100%) 0% 0%
    no-repeat padding-box;
    border: 1px solid #8da3ff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    border-radius: 30px;
    width: 34px;
    height: 100%;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;

    & div{
        color:white;
    }

  &:hover {
    cursor: pointer;
  }
`;

const Fix = ({children}) => {
  return <StyledButton>
      {children}
  </StyledButton>;
};

export default Fix;
