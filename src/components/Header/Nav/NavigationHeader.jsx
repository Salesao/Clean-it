import { useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { AuthSelector } from "../../../redux/AuthHandler/AuthHandler";
import Li from "../../../StyledComponents/NavigationLi";

export default function NavigationHeader() {
  const location = useLocation();
  const { authHandler } = useSelector(AuthSelector)
  const {push} = useHistory()

  return (
    <ul className="d-flex">
      <Li>
        <Link to="/">Home</Link>
      </Li>
      {location.pathname === "/" ? (
        <Li>
            <Scroll to="services">
              Services
            </Scroll>
        </Li>
      ) : <Li>
          <Scroll onClick={() => push("/")} to="bookNow">
            Book now
          </Scroll>
        </Li>}
      
      <Li last={"18vh"}>
        {authHandler
        ?<Link to="/profile">Your profile</Link>
        :<Link to="/reg/team">Join our team</Link>
        }
      </Li>
    </ul>
  );
}
