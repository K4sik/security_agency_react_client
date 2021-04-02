import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
                            <div className="card mb-1 bg-light">

                                <div className="card-header text-primary">
                                    ID: document_type_id
                                </div>
                                <div className="card-body bg-light">
                                    <h5 className="card-title">document_type name</h5>
                                    <p className="card-text text-truncate ">
                                        description
                                    </p>
                                    <Link to="" className="btn btn-primary">
                                        View / Update
                                    </Link>

                                    <button className="btn btn-danger ml-4">
                                        Delete
                                    </button>
                                </div>
                            </div>

                        
                    </div>
                </div>

            </div>
        );
    }
}

export default DocumentTypeBoard
