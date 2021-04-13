import axios from "axios";
import { GET_CLIENTS } from "./types";


export const getClients = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/client/all");
    dispatch({
        type: GET_CLIENTS,
        payload: res.data
    })
};