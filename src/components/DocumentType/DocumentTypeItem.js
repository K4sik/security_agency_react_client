import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteDocumentType } from "../../actions/documentTypeAction";

var divStyle = {
    margin:"6px"
}

class DocumentTypeItem extends Component {

    onDelete(document_type_id){
        this.props.deleteDocumentType(document_type_id);
    }

    render() {
        const {documentType} = this.props;
        return (
            <div style = { divStyle }>
                <div className="card mb-1 bg-light">            
                    <div className="card-header text-primary">
                        ID: {documentType.id}
                    </div>
                    <div className="card-body bg-light">
                        <h5 className="card-title">{documentType.name}</h5>
                        <p className="card-text text-truncate ">
                            {documentType.description}
                        </p>
                        <Link to="" className="btn btn-primary">
                            View / Update
                        </Link>         
                        <button className="btn btn-danger ml-4"
                            onClick={this.onDelete.bind(this, documentType.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>            
        )
    }
}

DocumentTypeItem.propTypes = {
    deleteDocumentType: PropTypes.func.isRequired
};

export default connect(null, {deleteDocumentType}) (DocumentTypeItem);
