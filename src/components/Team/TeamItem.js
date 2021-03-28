import React, { Component } from 'react'

var divStyle = {
    margin:"6px"
}

class TeamItem extends Component {
    render() {
        const {team} = this.props;
        return (
            <div style = { divStyle }>
                <div className="card mb-1 bg-light">
                    <div className="card-header text-primary">
                        ID: {team.id}
                    </div>
                    <div className="card-body bg-light">
                        <h5 className="card-title">{team.name}</h5>
                        <p className="card-text text-truncate ">
                            {team.description}
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
