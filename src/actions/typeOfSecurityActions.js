import axios from "axios";
import { GET_ERRORS } from "./types";

export const addTypeOfSecurity = (type_of_security, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/type_of_security/add", type_of_security);
        history.push("/type_of_security");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}