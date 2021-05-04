import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClientItem from './Client/ClientItem';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getClients } from "../actions/clientAction";
import { Table } from "react-bootstrap";

class ClientBoard extends Component {

    componentDidMount() {
        this.props.getClients();
    }

    render() {


        const { clients } = this.props.clients;

        let BoardContent;
        let items = [];

        const BoardAlgorithm = employees => {
            if (employees.length < 1) {
                return(
                    <div className="alert alert-info text-center" role="alert">
                        No one Client on this board
                    </div>
                )                
            } else {
                const tasks = clients.map(client => (
                    <ClientItem key={client.id} client={client} />
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
                            <th>Type of Client</th>
                            <th>Name of the company</th>
                            <th>Phone</th>
                            <th>Birthday</th>
                            <th>Address</th>
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

        BoardContent = BoardAlgorithm(clients);

        return (
            <div className="container">
            <Link to="/client/addClient" className="btn btn-primary mb-3">
                <i className="fas fa-plus-circle"> Create new Client</i>
            </Link>
            <br />
            <hr />            
                {BoardContent}
            </div>
        )
    }
}

ClientBoard.propTypes = {
    getClients: PropTypes.func.isRequired,
    clients: PropTypes.object.isRequired

};

const mapStateToProps = state => ({
    clients: state.client
});

export default connect(mapStateToProps, { getClients }) (ClientBoard);
