import { combineReducers } from "redux";
import userReducer from "./user";
import noteReducer from "./note";

export default combineReducers({
  user: userReducer,
  notes: noteReducer
})