import { GET_TYPESOFSECURITY } from "../actions/types";

const initialState = {
    typesOfSecurity: []
}

export default function anonymous(state = initialState, action){
    switch(action.type){
        
        case GET_TYPESOFSECURITY:
            return{
                ...state,
                typesOfSecurity: action.payload
            };
        
        default:
            return state;
    }
};