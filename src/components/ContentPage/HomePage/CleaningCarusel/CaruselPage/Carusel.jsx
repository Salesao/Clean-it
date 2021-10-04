import ImgCarusel from "../../../../../img/ImgForCarusel/ImgCarusel";
import Button from "../../../../../StyledComponents/Button";
import ContainerCarusel from "./ContainerCarusel";
import { initState } from "./initState";
import { Link as Scroll } from "react-scroll";

export default function Carusel({ condition }) {

  return (
    <ContainerCarusel>
      <div className="container d-flex">
        <div>
          <img src={initState[condition].image} alt="" />
        </div>
        <div className="w-50">
          <h2>{initState[condition].title}</h2>
          <div className="d-flex mb-4">
            <img src={ImgCarusel.brush} alt="" />
            <p>{initState[condition].firstP}</p>
          </div>

          <p className="p-1 mb-5">{initState[condition].lastP}</p>
          <Scroll to="bookNow">
            <Button
              width={"268px"}
            >
              Check availability
            </Button>
          </Scroll>
        </div>
      </div>
    </ContainerCarusel>
  );
}