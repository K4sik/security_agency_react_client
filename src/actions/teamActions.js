import axios from "axios";
import { DELETE_TEAM, GET_ERRORS, GET_TEAMS, GET_TEAM } from "./types"

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
};

export const deleteTeam = team_id => async dispatch =>{
    if(window.confirm(
        `Are you sure want to delete this team with id ${team_id}? \nThis action cannot be undone. `)){
        await axios.delete(`http://localhost:8080/api/team/${team_id}`)
        dispatch({
            type: DELETE_TEAM,
            payload: team_id
        })
    }
};

export const getTeam = (team_id, history) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:8080/api/team/${team_id}`)
        dispatch({
            type: GET_TEAM,
            payload: res.data
        });
    } catch (error) {
        history.push("/team");
    }
}