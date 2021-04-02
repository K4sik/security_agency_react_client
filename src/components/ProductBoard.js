import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ProductBoard extends Component {
    render() {
        return (
            <div className="container">
                <Link to="/product/addProduct" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create new Product</i>
                </Link>
                <br />
                <hr />
                <div className="container">
                    <div className="row">
                            <div className="card mb-1 bg-light">

                                <div className="card-header text-primary">
                                    ID: product_id
                                </div>
                                <div className="card-body bg-light">
                                    <h5 className="card-title">product name</h5>
                                    <p className="card-text text-truncate ">
                                        description
                                    </p>
                                    <Link to="" className="btn btn-primary">
                                        View / Update
                                    </Link>

                                    <button className="btn btn-danger ml-4">
                                        Delete
                                    </button>
                                </div>
                            </div>

                        
                    </div>
                </div>

            </div>
        );
    }
}

export default ProductBoard
