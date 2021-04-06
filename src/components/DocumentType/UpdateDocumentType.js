import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getDocumentType, addDocumentType } from "../../actions/documentTypeAction";

class UpdateDocumentType extends Component {

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
        } = nextProps.documentType;

        this.setState({
            id,
            name,
            description
        });
    }

    componentDidMount(){
        const { document_type_id } = this.props.match.params;
        this.props.getDocumentType(document_type_id);
    }

    onSubmit(e){
        e.preventDefault();
        const updateDocumentType = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description
        }

        this.props.addDocumentType(updateDocumentType, this.props.history);
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
                            <Link to="/document_type" className="btn btn-light">
                                Back to Board
                            </Link>
                            <h4 className="display-4 text-center">Add Document Type</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg", {
                                           "is-invalid": errors.name
                                        })} 
                                        name="name" 
                                        value={this.state.name} 
                                        placeholder="Document Type name" 
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

UpdateDocumentType.propTypes = {
    documentType: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getDocumentType: PropTypes.func.isRequired,
    addDocumentType: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    documentType: state.documentType.documentType,
    errors: state.errors
});

export default connect(mapStateToProps, { getDocumentType, addDocumentType }) (UpdateDocumentType);
