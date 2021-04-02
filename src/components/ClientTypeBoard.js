import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ClientTypeItem from './ClientType/ClientTypeItem';

class ClientTypeBoard extends Component {
    render() {
        return (
            <div className="container">
                <Link to="/client_type/addClientType" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create new Client Type</i>
                </Link>
                <br />
                <hr />
                <div className="container">
                    <div className="row">
                        <ClientTypeItem />
                        <ClientTypeItem />
                        <ClientTypeItem />
                    </div>
                </div>
            </div>
        );
    }
}

export default ClientTypeBoard
