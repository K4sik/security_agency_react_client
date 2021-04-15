import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { getDocuments } from "../actions/documentActions";
import DocumentItem from "./Document/DocumentItem";
import { Table } from "react-bootstrap";

class DocumentBoard extends Component {
    componentDidMount() {
        this.props.getDocuments();
    }
    render() {

        const { documents } = this.props.documents;

        let BoardContent;
        let items = [];

        const BoardAlgorithm = documents => {
            if (documents.length < 1) {
                return(
                    <div className="alert alert-info text-center" role="alert">
                        No one Document on this board
                    </div>
                )                
            } else {
                const tasks = documents.map(document => (
                    <DocumentItem key={document.id} document={document} />
                ));

                for (let i=0; i<tasks.length; i++){
                    // console.log(tasks[i]);
                    items.push(tasks[i]);
                }

                return (
                    <React.Fragment>
                        <Table striped bordered hover size="sm">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Document type</th>
                                <th>Date of issue</th>
                                <th>Number</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                                {items}
                            </tbody>
                        </Table>
                    </React.Fragment>
                )

            }
        };

        BoardContent = BoardAlgorithm(documents);

        return (
            <div className="container">
            <Link to="/document/addDocument" className="btn btn-primary mb-3">
                <i className="fas fa-plus-circle"> Create new Document</i>
            </Link>
            <br />
            <hr />            
                {BoardContent}
            </div>
        )
    }
}

DocumentBoard.propTypes = {
    getDocuments: PropTypes.func.isRequired,
    documents: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    documents: state.document
});

export default connect(mapStateToProps, { getDocuments }) (DocumentBoard);
