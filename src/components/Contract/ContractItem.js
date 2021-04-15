import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class ContractItem extends Component {
    render() {

        const {contract} = this.props;
        
        return (
            <tr>
                <td>{contract.id}</td>
                <td>{contract.first_name}</td>
                <td>{contract.last_name}</td>
                <td>{contract.employee.first_name}</td>
                <td>{contract.employee.last_name}</td>
                <td className="button-row">
                    <Link to={`/contract/updateContract/${contract.id}`} className="btn btn-outline-primary" >
                        <i className="fas fa-edit"></i>
                    </Link>
                    <span>      </span>
                    <button className="btn btn-outline-danger" 
                        // onClick={this.onDelete.bind(this, contract.id)}
                        >
                        <i className="fas fa-trash"></i>
                    </button>
                    
                </td>
            </tr>        
        )
    }
}

export default ContractItem;
