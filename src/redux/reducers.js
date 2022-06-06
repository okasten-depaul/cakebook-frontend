import { combineReducers } from "redux";
import userSlice from "./reducers/userSlice";

const rootReducer = combineReducers({
  userInformation: userSlice,
});

export default rootReducer;
