import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../actions/employeeActions";

var divStyle = {
    margin:"6px"
}

class EmployeeItem extends Component {

    onDelete(employee_id){
        this.props.deleteEmployee(employee_id);
    }

    render() {
        const {employee} = this.props;
    return (
        <div style = { divStyle }>
            <div className="card mb-1 bg-light">
                <div className="card-header text-primary">
                    ID: {employee.id}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{employee.first_name}</h5>
                    <p className="card-text text-truncate ">
                        some
                    </p>
                    <Link to={`/employee/updateEmployee/${employee.id}`} className="btn btn-primary">
                        View / Update
                    </Link>

                    <button className="btn btn-danger ml-4" 
                        onClick={this.onDelete.bind(this, employee.id)}
                        >
                        Delete
                    </button>
                </div>
            </div>
        </div>
        
    )
    }
}

export default connect(null, { deleteEmployee }) (EmployeeItem);
