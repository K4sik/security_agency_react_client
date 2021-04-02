import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class TypeOfSecurityBoard extends Component {
    render() {
        return (
            <div className="container">
                <Link to="/type_of_security/addTypeOfSecurity" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create new Type Of Security</i>
                </Link>
                <br />
                <hr />
                <div className="container">
                    <div className="row">
                            <div className="card mb-1 bg-light">

                                <div className="card-header text-primary">
                                    ID: type_of_security_id
                                </div>
                                <div className="card-body bg-light">
                                    <h5 className="card-title">type_of_security name</h5>
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

export default TypeOfSecurityBoard
