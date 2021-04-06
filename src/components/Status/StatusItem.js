import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { deleteStatus } from "../../actions/statusActions";

var divStyle = {
    margin:"6px"
}

class StatusItem extends Component {

    onDelete(status_id){
        this.props.deleteStatus(status_id);
    }

    render() {
        const {status} = this.props;
        return (
            <div  style = { divStyle }>
                <div className="card mb-1 bg-light">

                    <div className="card-header text-primary">
                        ID: {status.id}
                    </div>
                    <div className="card-body bg-light">
                        <h5 className="card-title">{status.name}</h5>
                        <p className="card-text text-truncate ">
                            {status.description}
                        </p>
                        <Link to={`/status/updateStatus/${status.id}`} className="btn btn-primary">
                            View / Update
                        </Link>

                        <button className="btn btn-danger ml-4"
                            onClick={this.onDelete.bind(this, status.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

StatusItem.propTypes = {
    deleteStatus: PropTypes.func.isRequired
};

export default connect(null, {deleteStatus}) (StatusItem);
