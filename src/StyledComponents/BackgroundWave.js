import styled from "styled-components";
import defaultImg from "../img/ImgForStartPage/DefaultImg";

const BackgroundWave = styled.div`
  background-image: url(${defaultImg.wave});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: ${(props) => props.size};
`;

export default BackgroundWave;
