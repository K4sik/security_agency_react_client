import { DELETE_DOCUMENT, GET_DOCUMENTS } from '../actions/types'

const initialState = {
    documents: []
}

export default function documentReducer(state = initialState, action) {
    switch(action.type) {

        case GET_DOCUMENTS:
            return{
                ...state,
                documents: action.payload
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
