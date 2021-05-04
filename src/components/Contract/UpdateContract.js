import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { addContract, getContract } from "../../actions/contractActions";
import { getClients } from "../../actions/clientAction";
import { getEmployees } from "../../actions/employeeActions";
import { getStatuses } from "../../actions/statusActions";
import { getTypesOfSecurity } from "../../actions/typeOfSecurityActions";
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

class UpdateContract extends Component {

    constructor(){
        super();
        this.state = {
            id: "",
            client: {},
            first_name: "",
            last_name: "",
            employee: {},
            status: {},
            date_begin: "",
            date_end: "",
            amount: "",
            typeOfSecurity: {},
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }

        const {
            id,
            client,
            first_name,
            last_name,
            employee,
            status,
            date_begin,
            date_end,
            amount,
            typeOfSecurity
        } = nextProps.contract;

        this.setState({
            id,
            client,
            first_name,
            last_name,
            employee,
            status,
            date_begin,
            date_end,
            amount,
            typeOfSecurity
        });
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const updateContract = {
            id: this.state.id,
            client: JSON.parse(this.state.client),
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            employee: JSON.parse(this.state.employee),
            status: JSON.parse(this.state.status),
            date_begin: this.state.date_begin,
            date_end: this.state.date_end,
            amount: this.state.amount,
            typeOfSecurity: JSON.parse(this.state.typeOfSecurity),
        };
        // console.log(updateContract);
        this.props.addContract(updateContract, this.props.history);
    }

    componentDidMount() {
        const { contract_id } = this.props.match.params;
        this.props.getContract(contract_id);
        this.props.getClients();
        this.props.getEmployees();
        this.props.getStatuses();
        this.props.getTypesOfSecurity();
    } 

    render() {

        const { errors } = this.state;

        const { clients } = this.props.clients;
        
        const { employees } = this.props.employees;

        const { statuses } = this.props.statuses;
        
        const { typesOfSecurity } = this.props.typesOfSecurity;

        const minDate = new Date(1960, 0, 1);

        const maxDate = new Date(2100, 0, 1);

        return (
            <div className="addContract">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to="/contract" className="btn btn-light">
                            Back to Board
                        </Link>
                        <h4 className="display-4 text-center">Add Contract</h4>
                        <form onSubmit={this.onSubmit}>                        

                            <div className="form-group">
                               <select className="form-control form-control-lg" name="client" value={this.state.clients} onChange={this.onChange} >
                               <option selected disabled={true}>Select Client</option>
                                    {
                                        clients.map((item, i) => (<option key={i} value={JSON.stringify(item)}>{item.first_name} {item.last_name}</option>))
                                    }
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg", {
                                        "is-invalid": errors.first_name
                                    })} 
                                    name="first_name" 
                                    value={this.state.first_name} 
                                    placeholder="First name" 
                                    onChange={this.onChange} 
                                />
                                {
                                    errors.first_name && (
                                        <div className="invalid-feedback">{ errors.first_name }</div>
                                    )
                                }
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg", {
                                        "is-invalid": errors.last_name
                                    })} 
                                    name="last_name" 
                                    value={this.state.last_name} 
                                    placeholder="Last name" 
                                    onChange={this.onChange} 
                                />
                                {
                                    errors.last_name && (
                                        <div className="invalid-feedback">{ errors.last_name }</div>
                                    )
                                }
                            </div>

                            <div className="form-group">
                               <select className="form-control form-control-lg" name="employee" value={this.state.employees} onChange={this.onChange}>                   
                               <option selected disabled={true}>Select Employee</option>
                                    {
                                        employees.map((item, i) => <option key={i} value={JSON.stringify(item)}>{item.first_name} {item.last_name}</option>)
                                    }
                                </select>
                            </div>

                            <div className="form-group">
                               <select className="form-control form-control-lg" name="status" value={this.state.statuses} onChange={this.onChange} >
                               <option selected disabled={true}>Select Status</option>
                                    {
                                        statuses.map((item, i) => (<option key={i} value={JSON.stringify(item)}>{item.name}</option>))
                                    }
                                </select>
                            </div>

                            <div className="DatePicker">
                                <DatePickerComponent placeholder="Enter Date Of Issue"
                                    min={minDate}
                                    max={maxDate}
                                    format="yyyy-MM-dd"
                                    name="date_begin"
                                    value={this.state.date_begin}
                                    onChange={this.onChange}
                                ></DatePickerComponent>
                            </div>

                            <div className="DatePicker">
                                <DatePickerComponent placeholder="Enter Date Of Issue"
                                    min={minDate}
                                    max={maxDate}
                                    format="yyyy-MM-dd"
                                    name="date_end"
                                    value={this.state.date_end}
                                    onChange={this.onChange}
                                ></DatePickerComponent>
                            </div>

                            <div className="form-group">
                               <select className="form-control form-control-lg" name="typeOfSecurity" value={this.state.typesOfSecurity} onChange={this.onChange}>                   
                               <option selected disabled={true}>Select Type Of Security</option>
                                    {
                                        typesOfSecurity.map((item, i) => <option key={i} value={JSON.stringify(item)}>{item.name}</option>)
                                    }
                                </select>
                            </div>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg", {
                                        "is-invalid": errors.amount
                                    })} 
                                    name="amount" 
                                    value={this.state.amount} 
                                    placeholder="Sum" 
                                    onChange={this.onChange} 
                                />
                                {
                                    errors.amount && (
                                        <div className="invalid-feedback">{ errors.amount }</div>
                                    )
                                }
                            </div>                           
                            
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

UpdateContract.propTypes = {
    getContract: PropTypes.object.isRequired,
    addContract: PropTypes.func.isRequired,
    clients: PropTypes.object.isRequired,
    employees: PropTypes.object.isRequired,
    statuses: PropTypes.object.isRequired,
    typesOfSecurity: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    contract: state.contract.contract,
    clients: state.client,
    employees: state.employee,
    statuses: state.status,
    typesOfSecurity: state.typeOfSecurity,
    errors: state.errors
});

export default connect(mapStateToProps, { addContract, getContract, getClients, getEmployees, getStatuses, getTypesOfSecurity }) (UpdateContract);
