
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { AuthSelector, AuthSignOut } from "../../redux/AuthHandler/AuthHandler";
import { loaderSelector, setModalActive, startLoading, stopLoading } from "../../redux/loader/loader";
import SignUp from "../../StyledComponents/SignButton";
import Modal from "../common/modal/Modal";
import AuthModal from "./authModal/AuthModal";
import Logo from "./Logo/Logo";
import NavigationHeader from "./Nav/NavigationHeader";
import { getAuth,signOut } from "firebase/auth";

export default function Header() {
  const location = useLocation();
  const {authHandler} = useSelector(AuthSelector)
  const dispatch = useDispatch()
  const {modalActive} = useSelector(loaderSelector)
  const {push} = useHistory()

  return (
    <div>
      <div
        className="container d-flex align-items-center"
        style={{ height: "20vh" }}
      >
        <Logo />
        <NavigationHeader />
        {authHandler
        ?<SignUp
        home={"#ffd836"}
        onClick={() => {
          dispatch(startLoading())
          signOut(getAuth()).then(() => {
            dispatch(AuthSignOut())
            setTimeout(() => {
              dispatch(stopLoading())
              push("/")
            },1000)
          }).catch(error => {
            console.log(error);
          })
        }}>
          Sign out
        </SignUp>
        :<SignUp
        home={location.pathname === "/" ? "white" : undefined}
        onClick={() => {
          dispatch(setModalActive())
          document.querySelector("body").style.overflow = "hidden";
        }}
      >Sign up</SignUp>}
      </div>
      <Modal status={modalActive}>
        <AuthModal/>
      </Modal>
    </div>
  );
}
