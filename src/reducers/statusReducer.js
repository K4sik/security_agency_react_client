import { GET_STATUSES } from "../actions/types";

const initialState = {
    statuses: []
}

export default function(state = initialState, action){
    switch(action.type){
        
        case GET_STATUSES:
            return{
                ...state,
                statuses: action.payload
            };
        
        default:
            return state;
    }
};