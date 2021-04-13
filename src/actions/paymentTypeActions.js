import axios from "axios";
import { DELETE_PAYMENTTYPES, GET_ERRORS, GET_PAYMENTTYPE, GET_PAYMENTTYPES } from "./types";

export const addPaymentType = (payment_type, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/payment_type/add", payment_type);
        history.push("/payment_type");
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

export const getPaymentTypes = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/payment_type/all");
    dispatch({
        type: GET_PAYMENTTYPES,
        payload: res.data
    })
};

export const deletePaymentType = payment_type_id => async dispatch =>{
    if(window.confirm(
        `Are you sure want to delete this Payment Type with id ${payment_type_id}? \nThis action cannot be undone. `)){
        await axios.delete(`http://localhost:8080/api/payment_type/${payment_type_id}`)
        dispatch({
            type: DELETE_PAYMENTTYPES,
            payload: payment_type_id
        })
    }
};

export const getPaymentType = (payment_type_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/payment_type/${payment_type_id}`)
        dispatch({
            type: GET_PAYMENTTYPE,
            payload: res.data
        });
    } catch (error) {
        history.push("/payment_type");
    }
}