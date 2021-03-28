import { combineReducers } from "redux"
import errorsReducer from "./errorsReducer";
import teamReducer from "./teamReducer";

export default combineReducers ({
   //
    errors: errorsReducer,
    team: teamReducer
})