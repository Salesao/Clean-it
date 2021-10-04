import styled from "styled-components";
import ImgCarusel from "../../../../../img/ImgForCarusel/ImgCarusel";

const ContainerNavigation = styled.div`
background-color: #6882ef;

& div:last-child {
  background-color: #ffd836;
  height: 11px;
}

& ul li {
  font-size: 24px;
  color: #ffffff;
  font: normal normal medium 24px/29px Raleway;
  letter-spacing: 0px;
  position: relative;
}

& ul li.active {
  color: #ffd836;
  font-weight:bold;
  &::after {
    content: url(${ImgCarusel.tangleCarusel});
    position: absolute;
    bottom: -3.28rem;
    left: 39%;
    cursor: auto;
  }
}

& ul li:hover {
  color: #ffd836;
  cursor: pointer;
}
`;

export default ContainerNavigation;