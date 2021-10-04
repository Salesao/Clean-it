import { combineReducers, configureStore} from "@reduxjs/toolkit";
import caruselReducer from "./carusel/carusel";
import loaderReducer from "./loader/loader";
import AuthReducer from "./AuthHandler/AuthHandler";
import ProfileReducer from "./ProfileSettings/ProfileSettings"
import CountReducer from "./CountsRoomAndBathroom/count";
import OrderReducer from "./CleanerAndTime/ClinerAndTime";
import SelectReduce from "./FilterCleanersBook/FilterClianerBook"

const rootReducer = combineReducers({
  carusel: caruselReducer,
  loader: loaderReducer,
  auth:AuthReducer,
  profile:ProfileReducer,
  count:CountReducer,
  order:OrderReducer,
  select:SelectReduce,
});

export default configureStore({ reducer: rootReducer },)