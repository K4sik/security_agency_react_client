import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PositionItem from './Position/PositionItem';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from '../actions/positionActions'

class PositionBoard extends Component {

    componentDidMount(){
        this.props.getBacklog();
    }

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

PositionBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    positions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    positions: state.position
});

export default connect(mapStateToProps, { getBacklog }) (PositionBoard);