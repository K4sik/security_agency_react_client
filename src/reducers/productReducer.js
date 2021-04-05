import { DELETE_PRODUCT, GET_PRODUCTS } from "../actions/types";

const initialState = {
    products: []
}

export default function anonymous(state = initialState, action){
    switch(action.type){
        
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            };

        case DELETE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(
                    product => product.id !== action.payload
                )
            };
        
        default:
            return state;
    }
};