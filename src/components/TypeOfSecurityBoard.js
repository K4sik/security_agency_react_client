import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TypeOfSecurityItem from './TypeOfSecurity/TypeOfSecurityItem';

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
                        <TypeOfSecurityItem />
                        <TypeOfSecurityItem />
                        <TypeOfSecurityItem />

                        
                    </div>
                </div>

            </div>
        );
    }
}

export default TypeOfSecurityBoard
