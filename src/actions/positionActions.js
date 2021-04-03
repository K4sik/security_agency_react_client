import axios from "axios";
import { GET_ERRORS, GET_POSITIONS } from "./types";

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
};

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/position/all");
    dispatch({
        type: GET_POSITIONS,
        payload: res.data
    })
};