import React, { Component } from 'react';
import { Link } from "react-router-dom";
import EmployeeItem from "./Employee/EmployeeItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../actions/employeeActions";

class EmployeeBoard extends Component {
    componentDidMount() {
        this.props.getBacklog();
    }
    render() {

        const { employees } = this.props.employees;

        let BoardContent;
        let items = [];

        const BoardAlgorithm = employees => {
            if (employees.length < 1) {
                return(
                    <div className="alert alert-info text-center" role="alert">
                        No Employees on this board
                    </div>
                )                
            } else {
                const tasks = employees.map(employee => (
                    <EmployeeItem key={employee.id} employee={employee} />
                ));

                for (let i=0; i<tasks.length; i++){
                    // console.log(tasks[i]);
                    items.push(tasks[i]);
                }

                return (
                    <React.Fragment>
                        {items}
                    </React.Fragment>
                )

            }
        };

        BoardContent = BoardAlgorithm(employees);

        return (
            <div className="container">
            <Link to="/employee/addEmployee" className="btn btn-primary mb-3">
                <i className="fas fa-plus-circle"> Create new Employee</i>
            </Link>
            <br />
            <hr />            
                {BoardContent}
            </div>
        )
    }
}

EmployeeBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    employees: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    employees: state.employee
});

export default connect(mapStateToProps, { getBacklog }) (EmployeeBoard);