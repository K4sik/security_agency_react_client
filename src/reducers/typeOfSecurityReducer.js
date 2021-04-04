import { DELETE_TYPEOFSECURITY, GET_TYPESOFSECURITY } from "../actions/types";

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

        case DELETE_TYPEOFSECURITY:
            return{
                ...state,
                typesOfSecurity: state.typesOfSecurity.filter(
                    typeOfSecurity => typeOfSecurity.id !== action.payload
                )
            };
        
        default:
            return state;
    }
};