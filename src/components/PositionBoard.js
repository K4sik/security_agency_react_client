import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PositionItem from './Position/PositionItem';

class PositionBoard extends Component {
    render() {
        return (
            <div className="container">
                <Link to="/position/addPosition" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create new Position</i>
                </Link>
                <br />
                <hr />
                <div className="container">
                    <div className="row">
                        <PositionItem />
                        <PositionItem />
                        <PositionItem />
                        <PositionItem />
                    </div>
                </div>                
            </div>
        );
    }
}

export default PositionBoard