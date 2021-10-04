import { Redirect, Route, Switch } from "react-router";
import ProfileOrders from "./ProfileOrders/ProfileOrders";
import ProfileSettings from "./ProfileSettings/ProfileSetting";



export default function ProfilePage() {
  return (
    <div>
      <Switch>
        <Route path="/profile/settings" component={ProfileSettings} />
        <Route path="/profile/orders" component={ProfileOrders} />
        <Redirect from="/profile" to="/profile/orders" />
      </Switch>
    </div>
  );
}