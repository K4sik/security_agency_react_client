import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClientTypeItem from './ClientType/ClientTypeItem';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from '../actions/clientTypeActions'

class ClientTypeBoard extends Component {

    componentDidMount(){
        this.props.getBacklog();
    }

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

ClientTypeBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    clientTypes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    clientTypes: state.position
});

export default connect(mapStateToProps, { getBacklog }) (ClientTypeBoard);
