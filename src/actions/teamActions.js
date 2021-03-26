import axios from "axios";
import { GET_ERRORS } from "./types"

export const addTeam = (team, history) => async dispatch => {
    try {
        await axios.post("http://localhost:8080/api/team/add", team);
        history.push("/team");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    } catch (error) {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        });
    }
}