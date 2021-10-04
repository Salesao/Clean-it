import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { useLocation } from "react-router";
import { AuthSignUp } from "../redux/AuthHandler/AuthHandler";
import { getProfile, setPassword } from "../redux/ProfileSettings/ProfileSettings";
import Loader from "../StyledComponents/Loader/Loader";
import fb from "./firebase";
import { getFirestore,doc,getDoc, collection, getDocs} from "firebase/firestore";
import { getAuth,onAuthStateChanged} from "firebase/auth";
import initCleaners from "../components/ContentPage/HomePage/BookNow/CleanPeople/initCleaners";
import { getDownloadURL, getStorage, ref } from "@firebase/storage";




const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const timeOut = () => {
    location.pathname === "/"
    ? setTimeout(() => {
        setPending(false);
      }, 2000)
    : setPending(false);
  }
  
  const [pending, setPending] = useState(true);
  useEffect(() => {
    
    onAuthStateChanged( getAuth(fb),async function (user) {
      if(initCleaners.length === 0){
        const cline = await collection(getFirestore(fb),"cliner")
        // const q = await query(cline,where("specialty","==",select))
        const snap = await getDocs(cline)
        snap.forEach(c => {
            const img = getDownloadURL(ref(getStorage(),`Clianers/${c.id}`))
            img.then(url => {
                initCleaners.push({id:c.id,img:url,info:false,...c.data()})})
            })
      }
      console.log(initCleaners.length);
      if (user) {
        
        const docRef = doc(getFirestore(fb),"users",getAuth(fb).currentUser.uid)
        const docSnap = await getDoc(docRef)
        const myData = docSnap.data()
        dispatch(AuthSignUp({ auth: user.uid }));
            if (docSnap.exists()) {
              dispatch(
                getProfile({
                  firstName: myData.firstName,
                  lastName: myData.lastName,
                  phone: myData.phone,
                  mail: getAuth(fb).currentUser.email,
                  initials:myData.initials
                })
                );
                dispatch(setPassword({password:myData.password}))
            } else {
              console.log("have");
            }
        timeOut()
      } else {
        timeOut()
      }
    });
  });

  if (pending) {
    return <Loader />;
  }
  return <>{children}</>
};

export default AuthProvider;
