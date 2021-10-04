import { Route, Switch} from "react-router";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactsUs/ContacUs";
import HomePage from "./HomePage/HomePage";
import OrderPage from "./OrderPage/OrderPage";
import ProfileSetting from "./Profile/ProfileSettings/ProfileSetting";
import Registration from "./Registration/Registration";
import NotFound from "../common/NotFound/NotFound";


export default function ContentPage() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/reg" component={Registration} />
        <Route path="/about" component={AboutUs} />
        <Route path="/contacts" component={ContactUs} />
        <Route path="/order" component={OrderPage} />
        <Route path="/profile" component={ProfileSetting} />
        <Route path="**" component={NotFound} />
      </Switch>
    </div>
  );
}