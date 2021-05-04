import { DELETE_DOCUMENT, GET_DOCUMENTS, GET_DOCUMENT } from '../actions/types'

const initialState = {
    documents: [],
    document: {}
}

export default function documentReducer(state = initialState, action) {
    switch(action.type) {

        case GET_DOCUMENTS:
            return{
                ...state,
                documents: action.payload
            };

        case GET_DOCUMENT:
            return{
                ...state,
                document: action.payload
            };
        
        case DELETE_DOCUMENT:
            return{
                ...state,
                documents: state.documents.filter(
                    document => document.id !== action.payload
                )
            };
            
        default:
            return state;
    }
};
