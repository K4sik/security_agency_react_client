import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteEmployee } from "../../actions/employeeActions";

class EmployeeItem extends Component {

    onDelete(employee_id){
        this.props.deleteEmployee(employee_id);
    }

    render() {
        const {employee} = this.props;
        
        return (
            <tr>
                <td>{employee.id}</td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.position.name}</td>
                <td>{employee.team.name}</td>
                <td>{employee.phone_number}</td>
                <td>{employee.birthday}</td>
                <td>{employee.address}</td>
                <td className="button-row">
                    <Link to={`/employee/updateEmployee/${employee.id}`} className="btn btn-outline-primary" >
                        <i className="fas fa-edit"></i>
                    </Link>
                    <span>      </span>
                    <button className="btn btn-outline-danger" 
                        onClick={this.onDelete.bind(this, employee.id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                    
                </td>
            </tr>        
        )
    }
}

export default connect(null, { deleteEmployee }) (EmployeeItem);
