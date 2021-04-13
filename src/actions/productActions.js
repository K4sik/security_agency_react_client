import axios from "axios";
import { DELETE_PRODUCT, GET_ERRORS, GET_PRODUCT, GET_PRODUCTS } from "./types";

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

export const getProducts = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/product/all");
    dispatch({
        type: GET_PRODUCTS,
        payload: res.data
    })
};

export const deleteProduct = product_id => async dispatch =>{
    if(window.confirm(
        `Are you sure want to delete this Product with id ${product_id}? \nThis action cannot be undone. `)){
        await axios.delete(`http://localhost:8080/api/product/${product_id}`)
        dispatch({
            type: DELETE_PRODUCT,
            payload: product_id
        })
    }
};

export const getProduct = (product_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/product/${product_id}`)
        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        });
    } catch (error) {
        history.push("/product");
    }
}