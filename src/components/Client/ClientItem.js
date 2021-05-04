import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteClient } from "../../actions/clientAction";

class ClientItem extends Component {

    onDelete(client_id){
        this.props.deleteClient(client_id);
    }

    render() {
        const {client} = this.props;
        
        return (
            <tr>
                <td>{client.id}</td>
                <td>{client.first_name}</td>
                <td>{client.last_name}</td>
                <td>{client.clientType.name}</td>
                <td>{client.company_name}</td>
                <td>{client.phone_number}</td>
                <td>{client.birthday}</td>
                <td>{client.address}</td>
                <td className="button-row">
                    <Link to={`/client/updateClient/${client.id}`} className="btn btn-outline-primary" >
                        <i className="fas fa-edit"></i>
                    </Link>
                    <span>      </span>
                    <button className="btn btn-outline-danger" 
                        onClick={this.onDelete.bind(this, client.id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                    
                </td>
            </tr>        
        )
    }
}

export default connect(null, { deleteClient }) (ClientItem);
