import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TypeOfSecurityItem from './TypeOfSecurity/TypeOfSecurityItem';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getBacklog } from "../actions/typeOfSecurityActions";

class TypeOfSecurityBoard extends Component {

    componentDidMount(){
        this.props.getBacklog();
    }

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

TypeOfSecurityBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    typesOfSecurity: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    typesOfSecurity: state.typeOfSecurity
});

export default connect(mapStateToProps, { getBacklog }) (TypeOfSecurityBoard);
