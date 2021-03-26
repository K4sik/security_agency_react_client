import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AddTeam extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            description: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const newTeam = {
            name: this.state.name,
            description: this.state.description
        }
        console.log(newTeam);
    }
    render() {
        return (
            <div className="addProjectTask">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/team" className="btn btn-light">
                                Back to Board
                            </Link>
                            <h4 className="display-4 text-center">Add Team</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" name="name" value={this.state.name} placeholder="Team name" onChange={this.onChange} />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" name="description" value={this.state.description} placeholder="Description" onChange={this.onChange} ></textarea>
                                </div>
                                {
                                    // <div className="form-group">
                                    //    <select className="form-control form-control-lg" name="status">
                                    //         <option value="">Select Status</option>
                                    //         <option value="TO_DO">TO DO</option>
                                    //         <option value="IN_PROGRESS">IN PROGRESS</option>
                                    //         <option value="DONE">DONE</option>
                                    //     </select>
                                    // </div>
                                }
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTeam;