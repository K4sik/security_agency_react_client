import React, { Component } from 'react';
import { Link } from "react-router-dom";
import EmployeeItem from "./Employee/EmployeeItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEmployees } from "../actions/employeeActions";
import { Table } from "react-bootstrap";
import axios from "axios";

class EmployeeBoard extends Component {
    
    onPrintClick(){
        if(window.confirm( `Are you sure want to save report of Employees? `)){
            axios.get("http://localhost:8080/api/employee/report/html");
        }
    }

    componentDidMount() {
        this.props.getEmployees();
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
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                            <th>Team</th>
                            <th>Phone</th>
                            <th>Birthday</th>
                            <th>Address</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </Table>
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
                    <button className="btn btn-outline-success mb-3 printButton" onClick={(this.onPrintClick)}>
                        <i className="fas fa-print"> Print</i>
                    </button>
                <br />
                <hr />            
                {BoardContent}
            </div>
        )
    }
}

EmployeeBoard.propTypes = {
    getEmployees: PropTypes.func.isRequired,
    employees: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    employees: state.employee
});

export default connect(mapStateToProps, { getEmployees }) (EmployeeBoard);
