import { useSelector } from "react-redux";
import { caruselSelector } from "../../../../redux/carusel/carusel";
import NavigationCarusel from "./NavigationCarusel/NavigationCarusel";
import Carusel from "./CaruselPage/Carusel";

export default function CleaningCarusel() {
  const { activePage } = useSelector(caruselSelector);
  return (
    <div>
      <NavigationCarusel page={activePage}/>
      <Carusel condition={activePage}/>
    </div>
  );
}
