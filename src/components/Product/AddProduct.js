import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import classnames from "classnames";

class AddProduct extends Component {
    render() {
        return (
            <div className="addProduct">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/product" className="btn btn-light">
                                Back to Board
                            </Link>
                            <h4 className="display-4 text-center">Add Product</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input 
                                        type="text" 
                                        className={classnames("form-control form-control-lg", {
                                           // "is-invalid": errors.name
                                        })} 
                                        name="name" 
                                        // value={this.state.name} 
                                        placeholder="Product name" 
                                        // onChange={this.onChange} 
                                    />
                                    {
                                        // errors.name && (
                                        //     <div className="invalid-feedback">{ errors.name }</div>
                                        // )
                                    }
                                </div>
                                <div className="form-group">
                                    <textarea 
                                        className="form-control form-control-lg" 
                                        name="description" 
                                        // value={this.state.description} 
                                        placeholder="Description" 
                                        // onChange={this.onChange} 
                                        >
                                    </textarea>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddProduct
