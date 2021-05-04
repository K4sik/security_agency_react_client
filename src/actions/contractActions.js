import axios from "axios";
import { DELETE_CONTRACT, GET_CONTRACT, GET_CONTRACTS, GET_ERRORS } from "./types";

export const addContract = (contract, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/contract/add", contract);
        history.push("/contract");
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

export const getContracts = () => async dispath => {
    const res = await axios.get("http://localhost:8080/api/contract/all");
    dispath({
        type: GET_CONTRACTS,
        payload: res.data
    })
};

export const deleteContract = contract_id => async dispatch =>{
    if(window.confirm(
        `Are you sure want to delete this Contract with id ${contract_id}? \nThis action cannot be undone. `)){
        await axios.delete(`http://localhost:8080/api/contract/${contract_id}`)
        dispatch({
            type: DELETE_CONTRACT,
            payload: contract_id
        })
    }
};

export const getContract = (contract_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/contract/${contract_id}`)
        dispatch({
            type: GET_CONTRACT,
            payload: res.data
        });
    } catch (error) {
        history.push("/contract");
    }
};