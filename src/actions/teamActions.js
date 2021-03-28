import axios from "axios";
import { GET_ERRORS, GET_TEAMS } from "./types"

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
};

export const getBacklog = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/team/all");
    dispatch({
        type: GET_TEAMS,
        payload: res.data
    })
}