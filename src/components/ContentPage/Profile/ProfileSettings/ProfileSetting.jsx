
import Div from "../../Registration/ContainerRegistration/StyledContainer/StyledConteiner";
import Settings from "./Styled/StyledForContainerSetting";
import ChangePassword from "./ContainerSettings/ChangePassword";
import SettingProfile from "./ContainerSettings/SettingProfile";
import Initials from "./ContainerSettings/initials";
import ProfileOrders from "../ProfileOrders/ProfileOrders";


export default function ProfileSettings() {

  return (
    <Div className="container bg-white shadow-lg d-flex" style={{ height: "85vh" }}>
      <div style={{width:"50%"}}>
        <Settings>
          <SettingProfile/>
        </Settings>
        <Settings>
        <ChangePassword/>
        </Settings>
      </div>
      <div style={{width:"50%"}}>
        <Settings>
          <Initials/>
        </Settings>
        <Settings>
          <ProfileOrders/>
        </Settings>
      </div>
    </Div>
  );
}
