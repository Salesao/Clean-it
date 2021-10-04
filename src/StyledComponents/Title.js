import React from "react";
import styled from "styled-components";

const StyledTitle = styled.div`
  font-size: 49px;
  color: ${(props) => props.color || "#6882EF"};
  text-transform: ${(props) => props.transform || "none"};
  font-weight: bold;
  line-height: ${(props) => props.line || "43px"};
`;

const Title = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;
