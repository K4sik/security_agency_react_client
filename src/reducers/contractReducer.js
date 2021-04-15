import { GET_CONTRACTS } from "../actions/types";

const initialState = {
    contracts: []
}

export default function contractReducer(state = initialState, action) {
    switch(action.type){

        case GET_CONTRACTS:
            return{
                ...state,
                contracts: action.payload
            };
        
        default:
            return state;
    }
}
