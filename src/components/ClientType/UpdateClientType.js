import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getClientType, addClientType } from "../../actions/clientTypeActions";

class UpdateClientType extends Component {
    
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
        } = nextProps.clientType;

        this.setState({
            id,
            name,
            description
        });
    }

    componentDidMount(){
        const { client_type_id } = this.props.match.params;
        this.props.getClientType(client_type_id);
    }

    onSubmit(e){
        e.preventDefault();
        const updateClientType = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description
        }

        this.props.addClientType(updateClientType, this.props.history);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="addDocumentType">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/client_type" className="btn btn-light">
                                Back to Board
                            </Link>
                            <h4 className="display-4 text-center">Add Client Type</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg", {
                                           "is-invalid": errors.name
                                        })} 
                                        name="name" 
                                        value={this.state.name} 
                                        placeholder="Client Type name" 
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

UpdateClientType.propTypes = {
    clientType: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getClientType: PropTypes.func.isRequired,
    addClientType: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    clientType: state.clientType.clientType,
    errors: state.errors
});

export default connect(mapStateToProps, { getClientType, addClientType }) (UpdateClientType);
