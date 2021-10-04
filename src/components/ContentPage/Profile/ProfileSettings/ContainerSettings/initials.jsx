
import { useSelector} from "react-redux";
import {profileSelector} from "../../../../../redux/ProfileSettings/ProfileSettings";


const Initials = () => {
    const {firstName,lastName,initials} = useSelector(profileSelector)
    
      return(
        <div className="border tablo mt-5">
          <div className="position-relative initials">
            <h2 className="position-absolute top-50 start-50 translate-middle">
            {initials}</h2>
          </div>
          <p style={{lineHeight:"2rem"}}>{firstName} {lastName}</p>
        </div>
      )
    

}

export default Initials