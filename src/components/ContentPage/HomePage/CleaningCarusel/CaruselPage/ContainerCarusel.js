import styled from "styled-components";
import ImgCarusel from "../../../../../img/ImgForCarusel/ImgCarusel";

const ContainerCarusel = styled.div`
padding: 5rem;
background-image: url(${ImgCarusel.wave});
background-repeat: no-repeat;
background-position: top right;
white-space: pre-line;
height: 567px;

& div div:first-child {
  width: 372px;
  margin-right: 100px;
}
  & div div:last-child div {
    & img {
      width: 28px;
      height: 37px;
      margin-right: 13px;
    }
    & p {
      font: italic normal 500 16px/21px Raleway;
      color: #6882ef;
    }
  }

  & div:last-child h2 {
    font-size: 49px;
    color: #6882ef;
    font-weight: bold;
    margin-bottom: 31px;
  }
`;

export default ContainerCarusel;