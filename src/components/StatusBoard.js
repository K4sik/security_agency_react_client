import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import StatusItem from './Status/StatusItem';

class StatusBoard extends Component {
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

export default StatusBoard
