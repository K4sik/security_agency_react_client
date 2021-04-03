import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DocumentTypeItem from './DocumentType/DocumentTypeItem';

class DocumentTypeBoard extends Component {
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

export default DocumentTypeBoard
