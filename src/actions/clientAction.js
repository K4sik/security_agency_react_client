import axios from "axios";
import { DELETE_CLIENT, GET_CLIENTS } from "./types";

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