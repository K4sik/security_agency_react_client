import React, { Component } from 'react'
import { Link } from 'react-router-dom'

var divStyle = {
    margin:"6px"
}

export default class PositionItem extends Component {
    render() {
        return (
            <div style = { divStyle }>
                <div className="card mb-1 bg-light">
                    <div className="card-header text-primary">
                        ID: position_id
                    </div>
                    <div className="card-body bg-light">
                        <h5 className="card-title">Position name</h5>
                        <p className="card-text text-truncate ">
                            description
                        </p>
                        <Link to="/"className="btn btn-primary">
                            View / Update
                        </Link>

                        <button className="btn btn-danger ml-4" >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
