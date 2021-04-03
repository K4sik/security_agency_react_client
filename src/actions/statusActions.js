import axios from "axios";
import { GET_ERRORS, GET_STATUSES } from "./types";

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
};

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/status/all");
    dispatch({
        type: GET_STATUSES,
        payload: res.data
    })
};