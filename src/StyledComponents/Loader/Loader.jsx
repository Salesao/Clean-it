import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 2000;
  background-color: rgba(255, 255, 255, ${props => props.opacity || "0.7"});
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  & .center {
    position: relative;
    right: 36px;
    bottom: 36px;

    & div {
      position: absolute;
      border: 5px solid #6882EF;
      opacity: 1;
      border-radius: 50%;
      animation: ${rotate} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    & div:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
`;

export default function Loader({opacity}) {
  return (
    <LoaderContainer opacity={opacity}>
      <div className="center">
        <div></div>
        <div></div>
      </div>
    </LoaderContainer>
  );
}
