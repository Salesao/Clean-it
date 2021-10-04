
import { Redirect, Route, Switch } from "react-router";
import RegistrationUser from "./RegistrationUser/RegistrationUser";
import RegistrationTeam from "./RegJoinTeam/RegJoinTeam";
import Step2 from "./RegJoinTeam/step2";
import Step3 from "./RegJoinTeam/step3.jsx";


export default function Registration() {
  return (
    <div>
      <Switch>
        <Route path="/reg/user" component={RegistrationUser} />
        <Route path="/reg/team" component={RegistrationTeam} />
        <Route path="/reg/team/step2" component={Step2}/>
        <Route path="/reg/team/step3" component={Step3}/>
        <Redirect from="/reg" to="/reg/user" />
      </Switch>
    </div>
  );
}