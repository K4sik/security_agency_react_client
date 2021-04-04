import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StatusItem from './Status/StatusItem';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../actions/statusActions"

class StatusBoard extends Component {

    componentDidMount(){
        this.props.getBacklog();
    }

    render() {

        const { statuses } = this.props.statuses;

        let BoardContent;
        let items = [];

        const BoardAlgorithm = statuses => {
            if (statuses.length < 1) {
                return(
                    <div className="alert alert-info text-center" role="alert">
                        No Teams on this board
                    </div>
                )                
            } else {
                const tasks = statuses.map(status => (
                    <StatusItem key={status.id} status={status} />
                ));

                for (let i=0; i<tasks.length; i++){
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

        BoardContent = BoardAlgorithm(statuses);

        return (
            <div className="container">
                <Link to="/status/addStatus" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create new Status</i>
                </Link>
                <br />
                <hr />
                {BoardContent}
            </div>
        );
    }
}

StatusBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    statuses: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    statuses: state.status
});

export default connect(mapStateToProps, { getBacklog }) (StatusBoard);
