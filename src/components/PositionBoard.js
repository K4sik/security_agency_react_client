import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PositionItem from './Position/PositionItem';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPositions } from '../actions/positionActions'

class PositionBoard extends Component {

    componentDidMount(){
        this.props.getPositions();
    }

    render() {

        const { positions } = this.props.positions;

        let BoardContent;
        let items = [];

        const BoardAlgorithm = positions => {
            if (positions.length < 1){
                return(
                    <div className="alert alert-info text-center" role="alert">
                        No Positions on this board
                    </div>
                )  
            } else {
                const tasks = positions.map(position => (
                    <PositionItem key={ position.id } position = {position} />
                ));

                for (let i=0; i<positions.length; i++){
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

        BoardContent = BoardAlgorithm(positions);

        return (
            <div className="container">
                <Link to="/position/addPosition" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create new Position</i>
                </Link>
                <br />
                <hr />
                {BoardContent}           
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

export default connect(mapStateToProps, { getPositions }) (PositionBoard);