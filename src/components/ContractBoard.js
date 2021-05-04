import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getContracts } from "../actions/contractActions";
import { Table } from "react-bootstrap";
import ContractItem from './Contract/ContractItem';

class ContractBoard extends Component {
    componentDidMount() {
        this.props.getContracts();
    }
    render() {
        
        const { contracts } = this.props.contracts;

        let BoardContent;
        let items = [];

        const BoardAlgorithm = contracts => {
            if (contracts.length < 1) {
                return(
                    <div className="alert alert-info text-center" role="alert">
                        No one Contract on this board
                    </div>
                )                
            } else {
                const tasks = contracts.map(contract => (
                    <ContractItem key={contract.id} contract={contract} />
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
                            <th>Client</th>
                            <th>Employee</th>
                            <th>Date of Agreement</th>
                            <th>Status</th>
                            <th>Date begin</th>
                            <th>Date end</th>
                            <th>Amount</th>
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

        BoardContent = BoardAlgorithm(contracts);

        return (
            <div className="container">
            <Link to="/contract/addContract" className="btn btn-primary mb-3">
                <i className="fas fa-plus-circle"> Create new Contract</i>
            </Link>
            <br />
            <hr />            
                {BoardContent}
            </div>
        )

    }
}

ContractBoard.propTypes = {
    getContracts: PropTypes.func.isRequired,
    contracts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    contracts: state.contract
});

export default connect(mapStateToProps, { getContracts }) (ContractBoard);
