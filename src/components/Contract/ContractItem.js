import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteContract } from "../../actions/contractActions";

class ContractItem extends Component {

    onDelete(contract_id){
        this.props.deleteContract(contract_id);
    }

    render() {

        const {contract} = this.props;
        
        return (
            <tr>
                <td>{contract.id}</td>
                <td>{contract.first_name} {contract.last_name}</td>
                <td>{contract.employee.first_name} {contract.employee.last_name}</td>
                <td></td>
                <td>{contract.status.name}</td>
                <td>{contract.date_begin}</td>
                <td>{contract.date_end}</td>
                <td>{contract.amount}</td>
                <td className="button-row">
                    <Link to={`/contract/updateContract/${contract.id}`} className="btn btn-outline-primary" >
                        <i className="fas fa-edit"></i>
                    </Link>
                    <span>      </span>
                    <button className="btn btn-outline-danger" 
                        onClick={this.onDelete.bind(this, contract.id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                    
                </td>
            </tr>        
        )
    }
}

export default connect(null, { deleteContract }) (ContractItem);
