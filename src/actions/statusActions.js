import axios from "axios";
import { GET_ERRORS } from "./types";

export const addStatus = (status, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/status/add", status);
        history.push("/status");
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