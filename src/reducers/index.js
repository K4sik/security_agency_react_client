import { combineReducers } from "redux"
import errorsReducer from "./errorsReducer";
import paymentTypeReducer from "./paymentTypeReducer";
import positionReducer from "./positionReducer";
import statusReducer from "./statusReducer";
import teamReducer from "./teamReducer";
import typeOfSecurityReducer from "./typeOfSecurityReducer";

export default combineReducers ({
   //
    errors: errorsReducer,
    team: teamReducer,
    position: positionReducer,
    status: statusReducer,
    typeOfSecurity: typeOfSecurityReducer,
    paymentType: paymentTypeReducer
})