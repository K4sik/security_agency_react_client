import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { addDocument } from "../../actions/documentActions";
import { getClients } from "../../actions/clientAction";
import { getDocumentTypes } from "../../actions/documentTypeAction";
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

class AddDocument extends Component {

    constructor(){
        super();
        this.state = {
            number: "",
            date_of_issue: "",
            client: {},
            documentType: {},
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
        const newDocument = {
            number: this.state.number,
            date_of_issue: this.state.date_of_issue,
            client: JSON.parse(this.state.client),
            documentType: JSON.parse(this.state.documentType)
        };
        // console.log(newDocument);
        this.props.addDocument(newDocument, this.props.history);
    }


    componentDidMount() {
        this.props.getClients();
        this.props.getDocumentTypes();
    } 

    render() {
        
        const { errors } = this.state;

        const { clients } = this.props.clients;
        
        const { documentTypes } = this.props.documentTypes;

        const minDate = new Date(1960, 0, 1);

        const maxDate = new Date(2100, 0, 1);
        
        return (
            <div className="addDocument">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/document" className="btn btn-light">
                                Back to Board
                            </Link>
                            <h4 className="display-4 text-center">Add Document</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.number
                                        })} 
                                        name="number" 
                                        value={this.state.number} 
                                        placeholder="Number" 
                                        onChange={this.onChange} 
                                    />
                                    {
                                        errors.first_name && (
                                            <div className="invalid-feedback">{ errors.first_name }</div>
                                        )
                                    }
                                </div>

                                <div className="DatePicker">
                                    <DatePickerComponent placeholder="Enter Date Of Issue"
                                        min={minDate}
                                        max={maxDate}
                                        format="yyyy-MM-dd"
                                        name="date_of_issue"
                                        value={this.state.date_of_issue}
                                        onChange={this.onChange}
                                    ></DatePickerComponent>
                                </div>

                                <div className="form-group">
                                   <select className="form-control form-control-lg" name="client" value={this.state.clients} onChange={this.onChange} >
                                   <option selected disabled={true}>Select Client</option>
                                        {
                                            clients.map((item, i) => (<option key={i} value={JSON.stringify(item)}>{item.first_name} {item.last_name}</option>))
                                        }
                                    </select>
                                </div>

                                <div className="form-group">
                                   <select className="form-control form-control-lg" name="documentType" value={this.state.documentTypes} onChange={this.onChange}>                   
                                   <option selected disabled={true}>Select Type of Document</option>
                                        {
                                            documentTypes.map((item, i) => <option key={i} value={JSON.stringify(item)}>{item.name}</option>)
                                        }
                                    </select>
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

AddDocument.propTypes = {
    addDocument: PropTypes.func.isRequired,
    clients: PropTypes.object.isRequired,
    documentTypes: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    clients: state.client,
    documentTypes: state.documentType,
    errors: state.errors
});

export default connect(mapStateToProps, { addDocument, getClients, getDocumentTypes }) (AddDocument);
