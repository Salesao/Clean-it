import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  align-content: ${(props) => props.content || "normal"};
  flex-flow: ${(props) => props.flow || "row nowrap"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "auto"};
  width: ${(props) => props.width || "100%"};
  background: ${(props) => props.background || "Inherited"};
`;

const Flex = (props) => {
  return <StyledFlex {...props} />;
};

export default Flex;
