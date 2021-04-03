import axios from "axios";
import { GET_CLIENTTYPES, GET_ERRORS } from "./types";

export const addClientType = (client_type, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/client_type/add", client_type);
        history.push("/client_type");
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
    const res = await axios.get("http://localhost:8080/api/client_type/all");
    dispatch({
        type: GET_CLIENTTYPES,
        payload: res.data
    })
};