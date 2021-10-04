import notFound from "../../../img/notFound/notFound";
import { Link } from "react-router-dom";
import NotFoundContainer from "./NotFoundContainer";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <div className="container">
        <div className="main">
          <h1>
            <div className="subhead">404 Error</div>
            Sorry, we can’t seem to find
            what you’re looking for.
          </h1>
          <p>
            You've landed on a URL that doesn't seem to exist on CSS-Tricks.
            Here's some options:
          </p>
          <ul>
            <li>
              If you think this is an error on our part, please{" "}
              <Link to="/contacts">let us know</Link>.
            </li>
            <li>
              If you want to go to the main page, <Link to="/">click here</Link>
              .
            </li>
          </ul>
        </div>
        <img src={notFound} alt="" />
      </div>
    </NotFoundContainer>
  );
}
