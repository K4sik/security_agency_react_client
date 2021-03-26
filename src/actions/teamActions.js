import axios from "axios";

export const addTeam = (team, history) => async dispatch => {
    await axios.post("http://localhost:8080/api/team/add", team);
    history.push("/team");
}