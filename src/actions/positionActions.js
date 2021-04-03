import axios from "axios";
import { GET_ERRORS } from "./types";

export const addPosition = (position, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/position/add", position);
        history.push("/position");
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