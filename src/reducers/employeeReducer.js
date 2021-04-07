import { DELETE_EMPLOYEE, GET_EMPLOYEES } from "../actions/types";

const initialState = {
    employees: []
}

export default function anonymous(state = initialState, action){
    switch(action.type){
        
        case GET_EMPLOYEES:
            return{
                ...state,
                employees: action.payload
            };

        case DELETE_EMPLOYEE:
            return{
                ...state,
                employees: state.employees.filter(
                    employee => employee.id !== action.payload
                )
            };

        default:
            return state;

    }
};