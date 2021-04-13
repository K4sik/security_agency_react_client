import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ClientItem extends Component {
    render() {
        const {client} = this.props;
        
        return (
            <tr>
                <td>{client.id}</td>
                <td>{client.first_name}</td>
                <td>{client.last_name}</td>
                <td>{client.clientType.name}</td>
                <td className="button-row">
                    <Link to={`/client/updateClient/${client.id}`} className="btn btn-outline-primary" >
                        <i className="fas fa-edit"></i>
                    </Link>
                    <span>      </span>
                    <button className="btn btn-outline-danger" 
                        // onClick={this.onDelete.bind(this, client.id)}
                        >
                        <i className="fas fa-trash"></i>
                    </button>
                    
                </td>
            </tr>        
        )
    }
}

export default ClientItem;
