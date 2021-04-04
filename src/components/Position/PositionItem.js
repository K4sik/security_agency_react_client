import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { deletePosition } from "../../actions/positionActions";

var divStyle = {
    margin:"6px"
}

class PositionItem extends Component {

    onDelete(position_id){
        this.props.deletePosition(position_id);
    }

    render() {
        const { position } = this.props;
        return (
            <div style = { divStyle }>
                <div className="card mb-1 bg-light">
                    <div className="card-header text-primary">
                        ID: {position.id}
                    </div>
                    <div className="card-body bg-light">
                        <h5 className="card-title">{position.name}</h5>
                        <p className="card-text text-truncate ">
                            {position.description}
                        </p>
                        <Link to="/"className="btn btn-primary">
                            View / Update
                        </Link>

                        <button className="btn btn-danger ml-4" 
                            onClick={this.onDelete.bind(this, position.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

PositionItem.propTypes = {
    deletePosition: PropTypes.func.isRequired
};

export default connect(null, {deletePosition}) (PositionItem);
