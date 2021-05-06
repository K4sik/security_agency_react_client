import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTeam } from "../../actions/teamActions";

var divStyle = {
    margin:"2px"
}

class TeamItem extends Component {

    onDelete(team_id){
        this.props.deleteTeam(team_id);
    }

    render() {
        const {team} = this.props;
        return (
            <div style = { divStyle }>
                <div className="card mb-1 bg-light">
                    <div className="card-header text-primary">
                        ID: {team.id}
                    </div>
                    <div className="card-body bg-light">
                        <h5 className="card-title">{team.name}</h5>
                        <p className="card-text text-truncate ">
                            {team.description}
                        </p>
                        <Link to={`/team/updateTeam/${team.id}`} className="btn btn-primary">
                            View / Update
                        </Link>

                        <button className="btn btn-danger ml-4" 
                            onClick={this.onDelete.bind(this, team.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            
        )
    }
}

TeamItem.propTypes = {
    deleteTeam: PropTypes.func.isRequired
};

export default connect(null, {deleteTeam}) (TeamItem);
