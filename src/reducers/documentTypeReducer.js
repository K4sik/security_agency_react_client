import { DELETE_DOCUMENTTYPE, GET_DOCUMENTTYPES, GET_DOCUMENTTYPE } from "../actions/types";

const initialState = {
    documentTypes: [],
    documentType: {}
}

export default function anonymous(state = initialState, action){
    switch(action.type){
        
        case GET_DOCUMENTTYPES:
            return{
                ...state,
                documentTypes: action.payload
            };

        case GET_DOCUMENTTYPE:
            return{
                ...state,
                documentType: action.payload
            };

        case DELETE_DOCUMENTTYPE:
            return{
                ...state,
                documentTypes: state.documentTypes.filter(
                    documentType => documentType.id !== action.payload
                )
            };
        
        default:
            return state;
    }
};