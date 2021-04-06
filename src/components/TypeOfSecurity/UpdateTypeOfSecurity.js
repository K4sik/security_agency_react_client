import React, { Component } from 'react';
import classnames from "classnames";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTypeOfSecurity, addTypeOfSecurity } from "../../actions/typeOfSecurityActions";

class UpdateTypeOfSecurity extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            description: "",
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.errors){
            this.setState({ errors: nextProps.errors });
        }

        const {
            id,
            name,
            description
        } = nextProps.typeOfSecurity;

        this.setState({
            id,
            name,
            description
        });
    }

    componentDidMount(){
        const { type_of_security_id } = this.props.match.params;
        this.props.getTypeOfSecurity(type_of_security_id);
    }

    onSubmit(e){
        e.preventDefault();
        const updateTypeOfSecurity = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description
        }

        this.props.addTypeOfSecurity(updateTypeOfSecurity, this.props.history);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="addTypeOfSecurity">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/type_of_security" className="btn btn-light">
                                Back to Board
                            </Link>
                            <h4 className="display-4 text-center">Add Type Of Security</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg", {
                                        "is-invalid": errors.name
                                        })} 
                                        name="name" 
                                        value={this.state.name} 
                                        placeholder="Type Of Security name" 
                                        onChange={this.onChange} 
                                    />
                                    {
                                        errors.name && (
                                            <div className="invalid-feedback">{ errors.name }</div>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        className="form-control form-control-lg" 
                                        name="description" 
                                        value={this.state.description} 
                                        placeholder="Description" 
                                        onChange={this.onChange} 
                                        >
                                    </textarea>
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

UpdateTypeOfSecurity.propTypes = {
    typeOfSecurity: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getTypeOfSecurity: PropTypes.func.isRequired,
    addTypeOfSecurity: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    typeOfSecurity: state.typeOfSecurity.typeOfSecurity,
    errors: state.errors
});

export default connect(mapStateToProps, { getTypeOfSecurity, addTypeOfSecurity }) (UpdateTypeOfSecurity);
