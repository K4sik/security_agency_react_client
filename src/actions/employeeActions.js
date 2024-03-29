import axios from "axios";
import { DELETE_EMPLOYEE, GET_EMPLOYEE, GET_EMPLOYEES, GET_ERRORS } from "./types";

export const addEmployee = (employee, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/employee/add", employee);
        history.push("/employee");
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

export const getEmployees = () => async dispatch => {
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

export const getEmployee = (employee_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/employee/${employee_id}`)
        dispatch({
            type: GET_EMPLOYEE,
            payload: res.data
        });
    } catch (error) {
        history.push("/employee");
    }
}