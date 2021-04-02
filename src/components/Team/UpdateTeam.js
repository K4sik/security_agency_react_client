import React, { Component } from 'react';
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { getTeam, addTeam } from "../../actions/teamActions";

class UpdateTeam extends Component {

    constructor() {
        super();
        this.state = {
            id: "",
            name: "",
            description: "",
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.errors){
            this.setState({ errors: nextProps.errors });
        }

        const {
            id,
            name,
            description
        } = nextProps.team;

        this.setState({
            id,
            name,
            description
        });
    }

    componentDidMount(){
        const { team_id } = this.props.match.params;
        this.props.getTeam(team_id);
    }

    onSubmit(e){
        e.preventDefault();
        const updateTeam = {
            id: this.state.id,
            name: this.state.name,
            description: this.state.description
        }

        this.props.addTeam(updateTeam, this.props.history);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="updateTeam">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/team" className="btn btn-light">
                                Back to Board
                            </Link>
                            <h4 className="display-4 text-center">
                                Update Team
                            </h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.name
                                        })}
                                        name="name"
                                        placeholder="Team name"
                                        value={this.state.name} 
                                        onChange={this.onChange} 
                                    />
                                    {
                                        errors.name && (
                                            <div className="invalid-feedback">{ errors.name }</div>
                                        )
                                    }
                                </div>
                                <div className="form-group">
                                <textarea
                                    className="form-control form-control-lg"
                                    placeholder="Description"
                                    name="description"
                                    value={this.state.description} 
                                    onChange={this.onChange} 
                                />
                                </div>
                                <input
                                type="submit"
                                className="btn btn-primary btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

UpdateTeam.propTypes = {
    team: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    getTeam: PropTypes.func.isRequired,
    addTeam: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    team: state.team.team,
    errors: state.errors
});

export default connect(mapStateToProps, {getTeam, addTeam}) (UpdateTeam);
