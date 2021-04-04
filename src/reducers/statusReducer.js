import { DELETE_STATUS, GET_STATUSES } from "../actions/types";

const initialState = {
    statuses: []
}

export default function anonymous(state = initialState, action){
    switch(action.type){
        
        case GET_STATUSES:
            return{
                ...state,
                statuses: action.payload
            };

        case DELETE_STATUS:
            return{
                ...state,
                statuses: state.statuses.filter(
                    status => status.id !== action.payload
                )
            };
        
        default:
            return state;
    }
};