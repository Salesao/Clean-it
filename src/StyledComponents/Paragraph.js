import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  color: ${(props) => props.color || "#593D3D"};
  margin: ${(props) => props.margin || "0"};
  font-weight: 500;
  font-size: ${(props) => props.size || "14px"};
  font-style: ${(props) => props.stile || "normal"};
  line-height: 21px;
  white-space: pre-line;
`;

const P = (props) => {
  return <StyledP {...props} />;
};

export default P;
