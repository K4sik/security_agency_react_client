import { DELETE_PAYMENTTYPES, GET_PAYMENTTYPES, GET_PAYMENTTYPE } from "../actions/types";

const initialState = {
    paymentTypes: [],
    paymentType: {}
}

export default function anonymous(state = initialState, action){
    switch(action.type){
        
        case GET_PAYMENTTYPES:
            return{
                ...state,
                paymentTypes: action.payload
            };

        case GET_PAYMENTTYPE:
            return{
                ...state,
                paymentType: action.payload
            };

        case DELETE_PAYMENTTYPES:
            return{
                ...state,
                paymentTypes: state.paymentTypes.filter(
                    paymentType => paymentType.id !== action.payload
                )
            };
        
        default:
            return state;
    }
};