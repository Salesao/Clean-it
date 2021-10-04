import React from "react";
import styled from "styled-components";
import { StyledButton } from "./Button";

const SignStyledButton = styled(StyledButton)`
  width: 106px;
  height: 48px;
  border: 3px solid ${(props) => props.home || "#6882EF" };
  color:  ${(props) => props.home || "#6882EF" };
  background: transparent;
  font-size: 18px;
  margin-right: -20px;
`;

const SignUp = (props) => {
  return (
    <SignStyledButton {...props}/>
  );
};

export default SignUp;
