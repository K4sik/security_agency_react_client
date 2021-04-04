import { GET_POSITIONS, DELETE_POSITION } from "../actions/types";

const initialState = {
    positions: []
}

export default function anonymous(state = initialState, action){
    switch(action.type){
        
        case GET_POSITIONS:
            return{
                ...state,
                positions: action.payload
            };

        case DELETE_POSITION:
            return{
                ...state,
                positions: state.positions.filter(
                    position => position.id !== action.payload
                )
            };
        
        default:
            return state;
    }
};