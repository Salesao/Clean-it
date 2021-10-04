
import { useLocation } from "react-router-dom";
import Nav from "./StyledNav";

export default function Navigation(){
    const location = useLocation();
    // const {push} = useHistory()
    return(
        <Nav className="container">
            {/* {(location.pathname === "/reg/team/step2" || 
            location.pathname === "/reg/team/step3") && 
            <div title="back step" className="arrow position-absolute top-0 start-0"
            onClick={() => {
                push(location.pathname === "/reg/team/step2"?
                "/reg/team":
                "/reg/team/step2")
                }}></div>} */}
            <ul className="d-flex justify-content-center pt-5">
                <li className={`${location.pathname === "/reg/team"?"active":"done"}`}>
                    Step 1
                </li>
                <li className={`${location.pathname === "/reg/team/step2"?"active":""} mx-4
                ${location.pathname === "/reg/team"?"disabled":"done"}`}>
                    Step 2
                </li>
                <li className={`${location.pathname === "/reg/team/step3"?"active":""}
                ${(location.pathname === "/reg/team"||
                location.pathname === "/reg/team/step2")?"disabled":""}`}>
                    Step 3
                </li>
            </ul>
        </Nav>
    )
}