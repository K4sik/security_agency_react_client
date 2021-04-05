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

        const { products } = this.props.products;

        let BoardContent;
        let items = [];

        const BoardAlgorithm = products => {
            if (products.length < 1) {
                return(
                    <div className="alert alert-info text-center" role="alert">
                        No Products on this board
                    </div>
                )                
            } else {
                const tasks = products.map(product => (
                    <ProductItem key={product.id} product={product} />
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

        BoardContent = BoardAlgorithm(products);
        return (
            <div className="container">
                <Link to="/product/addProduct" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create new Product</i>
                </Link>
                <br />
                <hr />
                <div className="container">
                    <div className="row">
                        {BoardContent}                     
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
