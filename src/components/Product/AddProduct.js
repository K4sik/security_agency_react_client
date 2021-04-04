import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProduct } from "../../actions/productActions";
import classnames from "classnames";

class AddProduct extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            price: "",
            provider: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const newProduct = {
            name: this.state.name,
            price: this.state.price,
            provider: this.state.provider
        };
        // console.log(newProduct);
        this.props.addProduct(newProduct, this.props.history);
    }

    render() {
        const { errors } = this.state;
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
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.name
                                            })} 
                                            name="name" 
                                            value={this.state.name} 
                                            placeholder="Product name" 
                                            onChange={this.onChange} 
                                        />
                                        {
                                            errors.name && (
                                                <div className="invalid-feedback">{ errors.name }</div>
                                            )
                                        }
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.price
                                            })} 
                                            name="price" 
                                            value={this.state.price} 
                                            placeholder="Price" 
                                            onChange={this.onChange} 
                                        />
                                        {
                                            errors.price && (
                                                <div className="invalid-feedback">{ errors.price }</div>
                                            )
                                        }
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text" 
                                            className={classnames("form-control form-control-lg", {
                                            "is-invalid": errors.provider
                                            })} 
                                            name="provider" 
                                            value={this.state.provider} 
                                            placeholder="provider" 
                                            onChange={this.onChange} 
                                        />
                                        {
                                            errors.provider && (
                                                <div className="invalid-feedback">{ errors.provider }</div>
                                            )
                                        }
                                    </div>
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

AddProduct.propTypes = {
    addProduct: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps, { addProduct }) (AddProduct);
