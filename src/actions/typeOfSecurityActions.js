import axios from "axios";
import { DELETE_TYPEOFSECURITY, GET_ERRORS, GET_TYPESOFSECURITY } from "./types";

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

export const deleteTypeOfSecurity = type_of_security_id => async dispatch =>{
    if(window.confirm(
        `Are you sure want to delete this Type of Security with id ${type_of_security_id}? \nThis action cannot be undone. `)){
        await axios.delete(`http://localhost:8080/api/type_of_security/${type_of_security_id}`)
        dispatch({
            type: DELETE_TYPEOFSECURITY,
            payload: type_of_security_id
        })
    }
};