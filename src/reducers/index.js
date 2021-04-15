import { combineReducers } from "redux"
import clientTypeReducer from "./clientTypeReducer";
import clientReducer from "./clientReducer";
import documentTypeReducer from "./documentTypeReducer";
import errorsReducer from "./errorsReducer";
import paymentTypeReducer from "./paymentTypeReducer";
import positionReducer from "./positionReducer";
import statusReducer from "./statusReducer";
import teamReducer from "./teamReducer";
import typeOfSecurityReducer from "./typeOfSecurityReducer";
import productReducer from "./productReducer";
import employeeReducer from "./employeeReducer";
import documentReducer from "./documentReducer";
export default combineReducers ({
   //
    errors: errorsReducer,
    team: teamReducer,
    position: positionReducer,
    employee: employeeReducer,
    status: statusReducer,
    typeOfSecurity: typeOfSecurityReducer,
    paymentType: paymentTypeReducer,
    documentType: documentTypeReducer,
    document: documentReducer,
    clientType: clientTypeReducer,
    client: clientReducer,
    product: productReducer
})