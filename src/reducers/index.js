import { combineReducers } from "redux"
import errorsReducer from "./errorsReducer";
import positionReducer from "./positionReducer";
import teamReducer from "./teamReducer";

export default combineReducers ({
   //
    errors: errorsReducer,
    team: teamReducer,
    position: positionReducer
})