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

        const { typesOfSecurity } = this.props.typesOfSecurity;

        let BoardContent;
        let items = [];

        const BoardAlgorithm = teams => {
            if (teams.length < 1) {
                return(
                    <div className="alert alert-info text-center" role="alert">
                        No Types Of Security on this board
                    </div>
                )                
            } else {
                const tasks = typesOfSecurity.map(typeOfSecurity => (
                    <TypeOfSecurityItem key={typeOfSecurity.id} typeOfSecurity={typeOfSecurity} />
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

        BoardContent = BoardAlgorithm(typesOfSecurity);

        return (
            <div className="container">
                <Link to="/type_of_security/addTypeOfSecurity" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create new Type Of Security</i>
                </Link>
                <br />
                <hr />
                {BoardContent}
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
