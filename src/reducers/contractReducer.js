import { DELETE_CONTRACT, GET_CONTRACT, GET_CONTRACTS } from "../actions/types";

const initialState = {
    contracts: [],
    contract: {}
}

export default function contractReducer(state = initialState, action) {
    switch(action.type){

        case GET_CONTRACTS:
            return{
                ...state,
                contracts: action.payload
            };

        case GET_CONTRACT:
            return{
                ...state,
                contract: action.payload
            };

        case DELETE_CONTRACT:
            return{
                ...state,
                contracts: state.contracts.filter(
                    contract => contract.id !== action.payload
                )
            };
        
        default:
            return state;
    }
}
