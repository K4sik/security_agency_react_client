import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTypeOfSecurity } from "../../actions/typeOfSecurityActions";

var divStyle = {
    margin:"2px"
}

class TypeOfSecurityItem extends Component {

    onDelete(type_of_security_id){
        this.props.deleteTypeOfSecurity(type_of_security_id);
    }

    render() {
        const { typeOfSecurity } = this.props;
        return (
            <div style = { divStyle }>
                <div className="card mb-1 bg-light">

                    <div className="card-header text-primary">
                        ID: {typeOfSecurity.id}
                    </div>
                    <div className="card-body bg-light">
                        <h5 className="card-title">{typeOfSecurity.name}</h5>
                        <p className="card-text text-truncate ">
                            {typeOfSecurity.description}
                        </p>
                        <Link to={`/type_of_security/updateTypeOfSecurity/${typeOfSecurity.id}`} className="btn btn-primary">
                            View / Update
                        </Link>

                        <button className="btn btn-danger ml-4"
                        onClick={this.onDelete.bind(this, typeOfSecurity.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

TypeOfSecurityItem.propTypes = {
    deleteTypeOfSecurity: PropTypes.func.isRequired
};

export default connect(null, { deleteTypeOfSecurity }) (TypeOfSecurityItem);
