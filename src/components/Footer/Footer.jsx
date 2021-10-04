import defaultImg from "../../img/ImgForStartPage/DefaultImg";
import AddressFooter from "./Address/AddressFooter";
import NavigationFooter from "./Nav/NavigationFooter";


export default function Footer() {
  return (
    <div className="container d-flex justify-content-around align-items-center "
      style={{ height: "20vh", fontWeight: 500 }}
    >
      <div>
        <img style={{marginLeft: "-20px"}} src={defaultImg.logo} alt="" />
      </div>
      <div className="flex-grow-1 align-self-center">
        <NavigationFooter />
      </div>
      <div>
        <AddressFooter />
      </div>
    </div>
  );
}
