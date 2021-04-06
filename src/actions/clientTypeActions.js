import axios from "axios";
import { DELETE_CLIENTTYPE, GET_CLIENTTYPE, GET_CLIENTTYPES, GET_ERRORS } from "./types";

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

export const deleteClientType = client_type_id => async dispatch =>{
    if(window.confirm(
        `Are you sure want to delete this Client Type with id ${client_type_id}? \nThis action cannot be undone. `)){
        await axios.delete(`http://localhost:8080/api/client_type/${client_type_id}`)
        dispatch({
            type: DELETE_CLIENTTYPE,
            payload: client_type_id
        })
    }
};

export const getClientType = (client_type_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/client_type/${client_type_id}`)
        dispatch({
            type: GET_CLIENTTYPE,
            payload: res.data
        });
    } catch (error) {
        history.push("/client_type");
    }
}