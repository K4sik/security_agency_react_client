import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PaymentTypeItem from './PaymentType/PaymentTypeItem';

class PaymentTypeBoard extends Component {
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

export default PaymentTypeBoard
