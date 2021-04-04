import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './Product/ProductItem';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../actions/productActions";

class ProductBoard extends Component {

    componentDidMount(){
        this.props.getBacklog();
    }

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

ProductBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    products: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    products: state.product
});

export default connect(mapStateToProps, { getBacklog }) (ProductBoard);
