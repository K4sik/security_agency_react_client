import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deletePaymentType } from "../../actions/paymentTypeActions";

var divStyle = {
    margin:"6px"
}

class PaymentTypeItem extends Component {

    onDelete(payment_type_id){
        this.props.deletePaymentType(payment_type_id);
    }

    render() {
        const {paymentType} = this.props;
        return (
            <div style = { divStyle }>
                <div className="card mb-1 bg-light">

                    <div className="card-header text-primary">
                        ID: {paymentType.id}
                    </div>
                    <div className="card-body bg-light">
                        <h5 className="card-title">{paymentType.name}</h5>
                        <p className="card-text text-truncate ">
                            {paymentType.description}
                        </p>
                        <Link to={`/payment_type/updatePaymentType/${paymentType.id}`} className="btn btn-primary">
                            View / Update
                        </Link>

                        <button className="btn btn-danger ml-4"
                            onClick={this.onDelete.bind(this, paymentType.id)}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

PaymentTypeItem.propTypes = {
    deletePaymentType: PropTypes.func.isRequired
};

export default connect(null, {deletePaymentType}) (PaymentTypeItem);
