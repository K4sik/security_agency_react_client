import axios from "axios";
import { DELETE_DOCUMENTTYPE, GET_DOCUMENTTYPE, GET_DOCUMENTTYPES, GET_ERRORS } from "./types";

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
};

export const getDocumentTypes = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/document_type/all");
    dispatch({
        type: GET_DOCUMENTTYPES,
        payload: res.data
    })
};

export const deleteDocumentType = document_type_id => async dispatch =>{
    if(window.confirm(
        `Are you sure want to delete this Document Type with id ${document_type_id}? \nThis action cannot be undone. `)){
        await axios.delete(`http://localhost:8080/api/document_type/${document_type_id}`)
        dispatch({
            type: DELETE_DOCUMENTTYPE,
            payload: document_type_id
        })
    }
};

export const getDocumentType = (document_type_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/document_type/${document_type_id}`)
        dispatch({
            type: GET_DOCUMENTTYPE,
            payload: res.data
        });
    } catch (error) {
        history.push("/document_type");
    }
}