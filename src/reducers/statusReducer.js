import { DELETE_STATUS, GET_STATUSES, GET_STATUS } from "../actions/types";

const initialState = {
    statuses: [],
    status: {}
}

export default function anonymous(state = initialState, action){
    switch(action.type){
        
        case GET_STATUSES:
            return{
                ...state,
                statuses: action.payload
            };
        
        case GET_STATUS:
            return{
                ...state,
                status: action.payload
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