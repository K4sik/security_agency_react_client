import { GET_PAYMENTTYPES } from "../actions/types";

const initialState = {
    paymentTypes: []
}

export default function anonymous(state = initialState, action){
    switch(action.type){
        
        case GET_PAYMENTTYPES:
            return{
                ...state,
                paymentTypes: action.payload
            };
        
        default:
            return state;
    }
};