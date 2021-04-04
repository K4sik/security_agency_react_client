import { DELETE_DOCUMENTTYPE, GET_DOCUMENTTYPES } from "../actions/types";

const initialState = {
    documentTypes: []
}

export default function anonymous(state = initialState, action){
    switch(action.type){
        
        case GET_DOCUMENTTYPES:
            return{
                ...state,
                documentTypes: action.payload
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