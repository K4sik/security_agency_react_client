import { GET_DOCUMENTTYPES } from "../actions/types";

const initialState = {
    documentTypes: []
}

export default function(state = initialState, action){
    switch(action.type){
        
        case GET_DOCUMENTTYPES:
            return{
                ...state,
                documentTypes: action.payload
            };
        
        default:
            return state;
    }
};