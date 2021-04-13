import { DELETE_CLIENT, GET_CLIENTS } from "../actions/types";

const initialState = {
    clients: []
}

export default function clientReducer(state = initialState, action) {
    switch(action.type){
        
        case GET_CLIENTS:
            return{
                ...state,
                clients: action.payload
            };

        case DELETE_CLIENT:
            return{
                ...state,
                clients: state.clients.filter(
                    client => client.id !== action.payload
                )
            };

        default:
            return state;

    }
}
