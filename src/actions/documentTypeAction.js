import axios from "axios";
import { GET_ERRORS } from "./types";

export const addDocumentType = (document_type, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/document_type/add", document_type);
        history.push("/document_type");
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
}