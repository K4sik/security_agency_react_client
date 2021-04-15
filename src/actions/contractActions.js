import axios from "axios";
import { GET_CONTRACTS } from "./types";

export const getContracts = () => async dispath => {
    const res = await axios.get("http://localhost:8080/api/contract/all");
    dispath({
        type: GET_CONTRACTS,
        payload: res.data
    })
};