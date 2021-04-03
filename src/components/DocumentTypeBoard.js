import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DocumentTypeItem from './DocumentType/DocumentTypeItem';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from '../actions/documentTypeAction'

class DocumentTypeBoard extends Component {

    componentDidMount(){
        this.props.getBacklog();
    }

    render() {
        return (
            <div className="container">
                <Link to="/document_type/addDocumentType" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create new Document Type</i>
                </Link>
                <br />
                <hr />
                <div className="container">
                    <div className="row">
                    <DocumentTypeItem />
                    <DocumentTypeItem />
                    <DocumentTypeItem />
                        
                    </div>
                </div>

            </div>
        );
    }
}

DocumentTypeBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    documentTypes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    documentTypes: state.documentType
});

export default connect(mapStateToProps, { getBacklog }) (DocumentTypeBoard);
