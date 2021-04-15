import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteDocument } from "../../actions/documentActions";

class DocumentItem extends Component {

    onDelete(document_id){
        this.props.deleteDocument(document_id);
    }

    render() {
        const {document} = this.props;
        
        return (
            <tr>
                <td>{document.id}</td>
                <td>{document.client.first_name}</td>
                <td>{document.client.last_name}</td>
                <td>{document.documentType.name}</td>
                <td>{document.date_of_issue}</td>
                <td>{document.number}</td>
                <td className="button-row">
                    <Link to={`/document/updateDocument/${document.id}`} className="btn btn-outline-primary" >
                        <i className="fas fa-edit"></i>
                    </Link>
                    <span>      </span>
                    <button className="btn btn-outline-danger" 
                        onClick={this.onDelete.bind(this, document.id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                    
                </td>
            </tr>        
        )
    }
}

export default connect(null, { deleteDocument }) (DocumentItem);
