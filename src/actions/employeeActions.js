import axios from "axios";
import { DELETE_EMPLOYEE, GET_EMPLOYEES } from "./types";


export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/employee/all");
    dispatch({
        type: GET_EMPLOYEES,
        payload: res.data
    })
};

export const deleteEmployee = employee_id => async dispatch =>{
    if(window.confirm(
        `Are you sure want to delete this Employee with id ${employee_id}? \nThis action cannot be undone. `)){
        await axios.delete(`http://localhost:8080/api/employee/${employee_id}`)
        dispatch({
            type: DELETE_EMPLOYEE,
            payload: employee_id
        })
    }
};