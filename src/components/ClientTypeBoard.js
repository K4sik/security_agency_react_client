import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClientTypeItem from './ClientType/ClientTypeItem';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getClientTypes } from '../actions/clientTypeActions'

class ClientTypeBoard extends Component {

    componentDidMount(){
        this.props.getClientTypes();
    }

    render() {

        const { clientTypes } = this.props.clientTypes;

        let BoardContent;
        let items = [];

        const BoardAlgorithm = clientTypes => {
            if (clientTypes.length < 1) {
                return(
                    <div className="alert alert-info text-center" role="alert">
                        No Client Types on this board
                    </div>
                )                
            } else {
                const tasks = clientTypes.map(clientType => (
                    <ClientTypeItem key={clientType.id} clientType={clientType} />
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

        BoardContent = BoardAlgorithm(clientTypes);

        return (
            <div className="container">
                <Link to="/client_type/addClientType" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create new Client Type</i>
                </Link>
                <br />
                <hr />
                <div className="container">
                    <div className="row">
                        {BoardContent}
                    </div>
                </div>
            </div>
        );
    }
}

ClientTypeBoard.propTypes = {
    getClientTypes: PropTypes.func.isRequired,
    clientTypes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    clientTypes: state.clientType
});

export default connect(mapStateToProps, { getClientTypes }) (ClientTypeBoard);
