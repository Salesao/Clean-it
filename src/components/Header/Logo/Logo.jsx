import { Link } from "react-router-dom";
import defaultImg from "../../../img/ImgForStartPage/DefaultImg";


export default function Logo() {
  return (
    <span className="flex-grow-1">
      <Link to="/">
        <img style={{marginLeft: "-20px"}} src={defaultImg.logo} alt="" />
      </Link>
    </span>
  );
}
