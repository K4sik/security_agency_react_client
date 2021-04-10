import axios from "axios";
import { DELETE_POSITION, GET_ERRORS, GET_POSITION, GET_POSITIONS } from "./types";

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

export const getPositionsForEmployee = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/position/all");
    dispatch({
        type: GET_POSITIONS,
        payload: res.data
    })
};

export const deletePosition = position_id => async dispatch =>{
    if(window.confirm(
        `Are you sure want to delete this position with id ${position_id}? \nThis action cannot be undone. `)){
        await axios.delete(`http://localhost:8080/api/position/${position_id}`)
        dispatch({
            type: DELETE_POSITION,
            payload: position_id
        })
    }
};

export const getPosition = (position_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/position/${position_id}`)
        dispatch({
            type: GET_POSITION,
            payload: res.data
        });
    } catch (error) {
        history.push("/position");
    }
}