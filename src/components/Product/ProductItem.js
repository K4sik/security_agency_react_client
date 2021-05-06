import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteProduct } from "../../actions/productActions";

var divStyle = {
    margin:"2px"
}

class ProductItem extends Component {

    onDelete(client_type_id){
        this.props.deleteProduct(client_type_id);
    }

    render() {
        const {product} = this.props;
        return (
            <div style = { divStyle }>
                <div className="card mb-1 bg-light">

                    <div className="card-header text-primary">
                        ID: {product.id}
                    </div>
                    <div className="card-body bg-light">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text text-truncate ">
                            {product.price}
                        </p>
                        <p className="card-text text-truncate ">
                            {product.provider}
                        </p>
                        <Link to={`/product/updateProduct/${product.id}`} className="btn btn-primary">
                            View / Update
                        </Link>

                        <button className="btn btn-danger ml-4"
                            onClick={this.onDelete.bind(this, product.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

ProductItem.propTypes = {
    deleteProduct: PropTypes.func.isRequired
};

export default connect(null, { deleteProduct }) (ProductItem);
