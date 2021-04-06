import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteClientType } from "../../actions/clientTypeActions"

var divStyle = {
    margin:"6px"
}

class ClientTypeItem extends Component {

    onDelete(client_type_id){
        this.props.deleteClientType(client_type_id);
    }

    render() {
        const {clientType} = this.props;
        return (
            <div style = { divStyle }>
                <div className="card mb-1 bg-light">

                    <div className="card-header text-primary">
                        ID: {clientType.id}
                    </div>
                    <div className="card-body bg-light">
                        <h5 className="card-title">{clientType.name}</h5>
                        <p className="card-text text-truncate ">
                            {clientType.description}
                        </p>
                        <Link to={`/client_type/updateClientType/${clientType.id}`} className="btn btn-primary">
                            View / Update
                        </Link>

                        <button className="btn btn-danger ml-4"
                            onClick={this.onDelete.bind(this, clientType.id)}>
                            Delete
                        </button>
                    </div>
                </div>

                
            </div>
        )
    }
}

ClientTypeItem.propTypes = {
    deleteClientType: PropTypes.func.isRequired
};

export default connect(null, { deleteClientType }) (ClientTypeItem);
