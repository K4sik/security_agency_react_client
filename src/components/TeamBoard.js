import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TeamItem from './Team/TeamItem';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTeams } from "../actions/teamActions";

class TeamBoard extends Component {
    componentDidMount() {
        this.props.getTeams();
    }
    render() {

        const { teams } = this.props.teams;

        let BoardContent;
        let items = [];

        const BoardAlgorithm = teams => {
            if (teams.length < 1) {
                return(
                    <div className="alert alert-info text-center" role="alert">
                        No Teams on this board
                    </div>
                )                
            } else {
                const tasks = teams.map(team => (
                    <TeamItem key={team.id} team={team} />
                ));

                for (let i=0; i<tasks.length; i++){
                    // console.log(tasks[i]);
                    items.push(tasks[i]);
                }

                return (
                    <React.Fragment>
                        <div className="container">
                            <div className="row">
                                {items}
                            </div>
                        </div>
                    </React.Fragment>
                )

            }
        };

        BoardContent = BoardAlgorithm(teams);

        return (
            <div className="container">
            <Link to="/team/addTeam" className="btn btn-primary mb-3">
                <i className="fas fa-plus-circle"> Create new Team</i>
            </Link>
            <br />
            <hr />            
                {BoardContent}
            </div>
        )
    }
}

TeamBoard.propTypes = {
    getTeams: PropTypes.func.isRequired,
    teams: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    teams: state.team
});

export default connect(mapStateToProps, {getTeams}) (TeamBoard)
