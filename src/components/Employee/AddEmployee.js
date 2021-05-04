import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { addEmployee } from "../../actions/employeeActions";
import { getTeams } from "../../actions/teamActions";
import { getPositions } from "../../actions/positionActions";
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

class AddEmployee extends Component {

    constructor(){
        super();
        this.state = {
            first_name: "",
            last_name: "",
            position: {},
            team: {},
            phone_number: "",
            birthday: "",
            address: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const newEmployee = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            position: JSON.parse(this.state.position),
            team: JSON.parse(this.state.team),
            phone_number: this.state.phone_number,
            birthday: this.state.birthday,
            address: this.state.address,
        };
        console.log(newEmployee);
        this.props.addEmployee(newEmployee, this.props.history);
    }


    componentDidMount() {
        this.props.getTeams();
        this.props.getPositions();
    }     
    
    render() {
        const { errors } = this.state;

        const { teams } = this.props.teams;
        
        const { positions } = this.props.positions;

        const minDate = new Date(1960, 0, 1);
        
        const maxDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDay());

        return (
            <div className="addTeam">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/employee" className="btn btn-light">
                                Back to Board
                            </Link>
                            <h4 className="display-4 text-center">Add Employee</h4>
                            <form onSubmit={this.onSubmit}>
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
                                   <select className="form-control form-control-lg" name="position" value={this.props.position} onChange={this.onChange} >
                                   <option selected disabled={true}>Select Position</option>
                                        {
                                            positions.map((item, i) => (<option key={i} value={JSON.stringify(item)}>{item.name}</option>))
                                        }
                                    </select>
                                </div>

                                <div className="form-group">
                                   <select className="form-control form-control-lg" name="team" value={this.props.team} onChange={this.onChange}>                   
                                   <option selected disabled={true}>Select Team</option>
                                        {
                                            teams.map((item, i) => <option key={i} value={JSON.stringify(item)}>{item.name}</option>)
                                        }
                                    </select>
                                </div>
                                
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.phone_number
                                        })} 
                                        name="phone_number" 
                                        value={this.state.phone_number} 
                                        placeholder="Phone" 
                                        onChange={this.onChange} 
                                    />
                                    {
                                        errors.phone_number && (
                                            <div className="invalid-feedback">{ errors.phone_number }</div>
                                        )
                                    }
                                </div>

                                <div className="DatePicker">
                                    <DatePickerComponent placeholder="Enter Birthday"
                                        min={minDate}
                                        max={maxDate}
                                        format="yyyy-MM-dd"
                                        name="birthday"
                                        value={this.state.birthday}
                                        onChange={this.onChange}
                                    ></DatePickerComponent>
                                </div>

                                <div className="form-group">
                                    <textarea 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.address
                                        })} 
                                        name="address" 
                                        value={this.state.address} 
                                        placeholder="Address" 
                                        onChange={this.onChange} 
                                        >
                                    </textarea>
                                    {
                                        errors.address && (
                                            <div className="invalid-feedback">{ errors.address }</div>
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

AddEmployee.propTypes = {
    addEmployee: PropTypes.func.isRequired,
    teams: PropTypes.object.isRequired,
    positions: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    teams: state.team,
    positions: state.position,
    errors: state.errors
});

export default connect(mapStateToProps, { addEmployee, getTeams, getPositions }) (AddEmployee);
