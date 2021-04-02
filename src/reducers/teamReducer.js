import { DELETE_TEAM, GET_TEAM, GET_TEAMS } from "../actions/types";

const initialState = {
    teams: [],
    team: {}
}

export default function(state = initialState, action){
    switch(action.type){
        
        case GET_TEAMS:
            return{
                ...state,
                teams: action.payload
            };

        case GET_TEAM:
            return{
                ...state,
                team: action.payload
            };

        case DELETE_TEAM:
            return{
                ...state,
                teams: state.teams.filter(
                    team => team.id !== action.payload
                )
            };
        
        default:
            return state;
    }
};