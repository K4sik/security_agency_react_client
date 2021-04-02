import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './Product/ProductItem';

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
                        <ProductItem />
                        <ProductItem />
                        <ProductItem />                        
                    </div>
                </div>

            </div>
        );
    }
}

export default ProductBoard
