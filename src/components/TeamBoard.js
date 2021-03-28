import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TeamItem from './Team/TeamItem';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../actions/teamActions";

class TeamBoard extends Component {
    componentDidMount() {
        this.props.getBacklog();
    }
    render() {
        return (
            <div className="container">
            <Link to="/team/addTeam" className="btn btn-primary mb-3">
                <i className="fas fa-plus-circle"> Create new Team</i>
            </Link>
            <br />
            <hr />
            
            <div className="container">
                <div className="row">
                    <TeamItem />
                    <TeamItem />
                    <TeamItem />
                    <TeamItem />
                    <TeamItem />
                    <TeamItem />
                    <TeamItem />
                    <TeamItem />
                    <TeamItem />
                    {
                        // <div className="col-md-4">
                        //     <div className="card text-center mb-2">
                        //         <div className="card-header bg-primary text-white">
                        //             <h3>In Progress</h3>
                        //         </div>
                        //     </div>

                        // </div>
                        // <div className="col-md-4">
                        //     <div className="card text-center mb-2">
                        //         <div className="card-header bg-success text-white">
                        //             <h3>Done</h3>
                        //         </div>
                        //     </div>

                        // </div>
                    }
                </div>
            </div>

        </div>
        )
    }
}

TeamBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    teams: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    teams: state.team
});

export default connect(mapStateToProps, {getBacklog}) (TeamBoard)
