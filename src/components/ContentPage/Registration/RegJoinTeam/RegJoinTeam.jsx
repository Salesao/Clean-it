
import {  useLocation } from "react-router-dom";
import Navigation from "./Navigation/navigRegist";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

import Div from "../ContainerRegistration/StyledContainer/StyledConteiner";


const RegistrationTeam = () => {

  const location = useLocation()


  return (
    <Div className="container bg-white shadow-lg">
    <Navigation/>
    {location.pathname === "/reg/team" && <Step1/>}
    {location.pathname === "/reg/team/step2" && <Step2/>}
    {location.pathname === "/reg/team/step3" && <Step3/>}
  </Div>
  );
}

export default RegistrationTeam;