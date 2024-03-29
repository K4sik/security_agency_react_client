import { DELETE_EMPLOYEE, GET_EMPLOYEES, GET_EMPLOYEE } from "../actions/types";

const initialState = {
    employees: [],
    employee: {}
}

export default function anonymous(state = initialState, action){
    switch(action.type){
        
        case GET_EMPLOYEES:
            return{
                ...state,
                employees: action.payload
            };

        case GET_EMPLOYEE:
            return{
                ...state,
                employee: action.payload
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