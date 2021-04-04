import axios from "axios";
import { GET_ERRORS, GET_PRODUCTS } from "./types";

export const addProduct = (product, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/product/add", product);
        history.push("/product");
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
    const res = await axios.get("http://localhost:8080/api/product/all");
    dispatch({
        type: GET_PRODUCTS,
        payload: res.data
    })
};