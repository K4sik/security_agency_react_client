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

        const { documentTypes } = this.props.documentTypes;

        let BoardContent;
        let items = [];

        const BoardAlgorithm = documentTypes => {
            if (documentTypes.length < 1) {
                return(
                    <div className="alert alert-info text-center" role="alert">
                        No Document Types on this board
                    </div>
                )                
            } else {
                const tasks = documentTypes.map(documentType => (
                    <DocumentTypeItem key={documentType.id} documentType={documentType} />
                ));

                for (let i=0; i<tasks.length; i++){
                    // console.log(tasks[i]);
                    items.push(tasks[i]);
                }

                return (
                    <React.Fragment>
                        <div className="container">
                            <div className="row">
                                {items}
                            </div>
                        </div>
                    </React.Fragment>
                )

            }
        };

        BoardContent = BoardAlgorithm(documentTypes);

        return (
            <div className="container">
                <Link to="/document_type/addDocumentType" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create new Document Type</i>
                </Link>
                <br />
                <hr />
                    {BoardContent}
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
