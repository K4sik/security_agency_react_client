import React, { Component } from 'react'

var divStyle = {
    margin:"6px"
}

class TeamItem extends Component {
    render() {
        return (
            <div style = { divStyle }>
                <div className="card mb-1 bg-light">
                    <div className="card-header text-primary">
                        ID: TeamId
                    </div>
                    <div className="card-body bg-light">
                        <h5 className="card-title">Name</h5>
                        <p className="card-text text-truncate ">
                            Description
                        </p>
                        <a href="/" className="btn btn-primary">
                            View / Update
                        </a>

                        <button className="btn btn-danger ml-4">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default TeamItem
