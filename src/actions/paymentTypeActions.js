import axios from "axios";
import { GET_ERRORS, GET_PAYMENTTYPES } from "./types";

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

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/payment_type/all");
    dispatch({
        type: GET_PAYMENTTYPES,
        payload: res.data
    })
};