import { GET_CLIENTTYPES } from "../actions/types";

const initialState = {
    clientTypes: []
}

export default function anonymous(state = initialState, action){
    switch(action.type){
        
        case GET_CLIENTTYPES:
            return{
                ...state,
                clientTypes: action.payload
            };
        
        default:
            return state;
    }
};