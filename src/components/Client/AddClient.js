import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { addClient } from "../../actions/clientAction";
import { getClientTypes } from "../../actions/clientTypeActions";

class AddClient extends Component {

    constructor(){
        super();
        this.state = {
            first_name: "",
            last_name: "",
            clientType: {},
            company_name: "",
            phone_number: "",
            address: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const newClient = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            clientType: JSON.parse(this.state.clientType),
            company_name: this.state.company_name,
            phone_number: this.state.phone_number,
            address: this.state.address,
        };
        console.log(newClient);
        this.props.addClient(newClient, this.props.history);
    }

    componentDidMount() {
        this.props.getClientTypes();
    }

    render() {

        const { errors } = this.state;

        const { clientTypes } = this.props.clientTypes;

        return (
            <div className="addClient">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/employee" className="btn btn-light">
                                Back to Board
                            </Link>
                            <h4 className="display-4 text-center">Add Client</h4>
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
                                   <select className="form-control form-control-lg" name="clientType" value={this.props.clientType} onChange={this.onChange} >
                                   <option selected disabled={true}>Select Client Type</option>
                                        {
                                            clientTypes.map((item, i) => (<option key={i} value={JSON.stringify(item)}>{item.name}</option>))
                                        }
                                    </select>
                                </div>

                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.company_name
                                        })} 
                                        name="company_name" 
                                        value={this.state.company_name} 
                                        placeholder="Company name" 
                                        onChange={this.onChange} 
                                    />
                                    {
                                        errors.phone_number && (
                                            <div className="invalid-feedback">{ errors.company_name }</div>
                                        )
                                    }
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

AddClient.propTypes = {
    addClient: PropTypes.func.isRequired,
    clientTypes: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    clientTypes: state.clientType,
    errors: state.errors
});

export default connect(mapStateToProps, { addClient, getClientTypes }) (AddClient);
