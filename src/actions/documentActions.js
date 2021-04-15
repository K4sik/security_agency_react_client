import axios from "axios";
import { DELETE_DOCUMENT, GET_DOCUMENTS, GET_ERRORS } from "./types";

export const addDocument = (document, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/document/add", document);
        history.push("/document");
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

export const getDocuments = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/document/all");
    dispatch({
        type: GET_DOCUMENTS,
        payload: res.data
    })
};

export const deleteDocument = document_id => async dispatch =>{
    if(window.confirm(
        `Are you sure want to delete this Document with id ${document_id}? \nThis action cannot be undone. `)){
        await axios.delete(`http://localhost:8080/api/document/${document_id}`)
        dispatch({
            type: DELETE_DOCUMENT,
            payload: document_id
        })
    }
};