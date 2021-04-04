import { DELETE_PAYMENTTYPES, GET_PAYMENTTYPES } from "../actions/types";

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

            case DELETE_PAYMENTTYPES:
                return{
                    ...state,
                    paymentTypes: state.paymentTypes.filter(
                        paymentTypes => paymentTypes.id !== action.payload
                    )
                };
        
        default:
            return state;
    }
};