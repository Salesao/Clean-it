import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent linear-gradient(90deg, #8da3ff 0%, #6781ef 100%) 0% 0%
  no-repeat padding-box;
  border: 1px solid #8da3ff;
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  border-radius: 30px;
  width: ${(props) => props.width || "220px"};
  height: ${(props) => props.height || "60px"};
  outline: none;


  &:hover {
    cursor: pointer;
  }
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
