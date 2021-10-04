import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  color: #593d3d;
  cursor: pointer;
  font-weight: ${props => props.weight || "bold"};
  font-size: ${props => props.size || "18px"};
  margin-right: 32px;

  &:last-child {
    margin-right: ${props => props.last || "0px"};
  }
  &:first-child{
    margin-left: ${props => props.first || "0px"};
  }
  &:hover {
    color: #0056b3;
  }


`;

const Li = (props) => {
  return <StyledLi {...props}/>;
};
export default Li;
