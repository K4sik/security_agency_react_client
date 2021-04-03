import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StatusItem from './Status/StatusItem';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../actions/statusActions"

class StatusBoard extends Component {

    componentDidMount(){
        this.props.getBacklog();
    }

    render() {
        return (
            <div className="container">
                <Link to="/status/addStatus" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create new Status</i>
                </Link>
                <br />
                <hr />
                <div className="container">
                    <div className="row">
                        <StatusItem />
                        <StatusItem />
                        <StatusItem />
                        <StatusItem />
                        <StatusItem />                        
                    </div>
                </div>

            </div>
        );
    }
}

StatusBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    statuses: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    statuses: state.status
});

export default connect(mapStateToProps, { getBacklog }) (StatusBoard);
