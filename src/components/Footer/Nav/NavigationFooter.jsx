import { Link } from "react-router-dom";
import Li from "../../../StyledComponents/NavigationLi";


export default function NavigationFooter() {
  return (
    <ul className="d-flex m-5 justify-content-center">
      <Li>
        <Link to="/about">About</Link>
      </Li>
      <Li>
        <Link to="/contacts">Contacts Us</Link>
      </Li>
      <Li>
        <Link to="">Blog</Link>
      </Li>
      <Li>
        <Link to="">Help</Link>
      </Li>
    </ul>
  );
}
