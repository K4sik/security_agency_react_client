import axios from "axios";
import { DELETE_CONTRACT, GET_CONTRACTS } from "./types";

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