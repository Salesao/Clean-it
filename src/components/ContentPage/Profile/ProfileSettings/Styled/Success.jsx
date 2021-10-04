import { useDispatch, useSelector } from "react-redux";
import { loaderSelector, successEnd } from "../../../../../redux/loader/loader";
import {Animate} from "react-simple-animate";

const Success = () => {
  const dispatch = useDispatch();
  const {success} = useSelector(loaderSelector)
  return (
    <Animate
      start={{ transform: "translateY(-10px)", opacity: "0" }}
      end={{ transform: "translateY(0px)", opacity: "1" }}
      duration={0.4}
      play={success}
      onComplete={() => {
        setTimeout(() => {
          dispatch(successEnd());
        }, 1000);
      }}
    >
      <div className="success position-absolute start-100 d-flex align-items-center justify-content-center">
        Success
      </div>
    </Animate>
  );
};

export default Success
