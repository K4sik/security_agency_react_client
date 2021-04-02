import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
                            <div className="card mb-1 bg-light">

                                <div className="card-header text-primary">
                                    ID: status_id
                                </div>
                                <div className="card-body bg-light">
                                    <h5 className="card-title">status name</h5>
                                    <p className="card-text text-truncate ">
                                        description
                                    </p>
                                    <Link to="" className="btn btn-primary">
                                        View / Update
                                    </Link>

                                    <button className="btn btn-danger ml-4">
                                        Delete
                                    </button>
                                </div>
                            </div>

                        
                    </div>
                </div>

            </div>
        );
    }
}

export default StatusBoard
