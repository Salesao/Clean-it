import Header from "./components/Header/Header";
import ContentPage from "./components/ContentPage/ContentPage";
import Footer from "./components/Footer/Footer";
import { useLocation } from "react-router";
import BackgroundWave from "./StyledComponents/BackgroundWave";
import Loader from "./StyledComponents/Loader/Loader";
import { useSelector } from "react-redux";
import { loaderSelector} from "./redux/loader/loader";
import { Element } from "react-scroll";
import AuthProvider from "./auth/AuthProvider";
import { Animate } from "react-simple-animate";


function App() {
  let location = useLocation();
  const { isLoading } = useSelector(loaderSelector);
  let anim = true
  
  

  return (
    <AuthProvider>
      <Animate
      start={{opacity:"0"}}
      end={{opacity:"1"}}
      play={anim}
      duration={0.5}
      >
    <BackgroundWave size={location.pathname !== "/" ? "0" : "70vw 103vh"}>
      <Element name="startPage"/>
    {isLoading && <Loader opacity={location.pathname === "/reg/user" || 
  location.pathname === "/" ||
  location.pathname === "/order" ||
  location.pathname === "/profile"?"1":"0.7"} />}
      <Header />
      <ContentPage />
      <Footer />
    </BackgroundWave>
    </Animate>
    </AuthProvider>
  );
}

export default App;
