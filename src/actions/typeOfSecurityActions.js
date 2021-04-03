import axios from "axios";
import { GET_ERRORS, GET_TYPESOFSECURITY } from "./types";

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
};

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/type_of_security/all");
    dispatch({
        type: GET_TYPESOFSECURITY,
        payload: res.data
    })
};