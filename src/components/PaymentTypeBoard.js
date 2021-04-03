import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PaymentTypeItem from './PaymentType/PaymentTypeItem';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { getBacklog } from '../actions/paymentTypeActions'

class PaymentTypeBoard extends Component {
    
    componentDidMount(){
        this.props.getBacklog();
    }

    render() {
        return (
            <div className="container">
                <Link to="/payment_type/addPaymentType" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create new Payment type</i>
                </Link>
                <br />
                <hr />
                <div className="container">
                    <div className="row">
                        <PaymentTypeItem />
                        <PaymentTypeItem />
                        <PaymentTypeItem />

                        
                    </div>
                </div>

            </div>
        );
    }
}

PaymentTypeBoard.propTypes = {
    getBacklog: PropTypes.func.isRequired,
    paymentTypes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    paymentTypes: state.paymentType
});

export default connect(mapStateToProps, { getBacklog }) (PaymentTypeBoard);
