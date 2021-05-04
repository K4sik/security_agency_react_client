import axios from "axios";
import { DELETE_CLIENT, GET_CLIENTS, GET_CLIENT, GET_ERRORS } from "./types";

export const addClient = (client, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/client/add", client);
        history.push("/client");
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

export const getClients = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/client/all");
    dispatch({
        type: GET_CLIENTS,
        payload: res.data
    })
};

export const deleteClient = client_id => async dispatch =>{
    if(window.confirm(
        `Are you sure want to delete this Client with id ${client_id}? \nThis action cannot be undone. `)){
        await axios.delete(`http://localhost:8080/api/client/${client_id}`)
        dispatch({
            type: DELETE_CLIENT,
            payload: client_id
        })
    }
};

export const getClient = (client_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/client/${client_id}`)
        dispatch({
            type: GET_CLIENT,
            payload: res.data
        });
    } catch (error) {
        history.push("/client");
    }
};