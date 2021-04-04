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

        const { paymentTypes } = this.props.paymentTypes;

        let BoardContent;
        let items = [];

        const BoardAlgorithm = paymentTypes => {
            if (paymentTypes.length < 1) {
                return(
                    <div className="alert alert-info text-center" role="alert">
                        No Payment Types on this board
                    </div>
                )                
            } else {
                const tasks = paymentTypes.map(paymentType => (
                    <PaymentTypeItem key={paymentType.id} paymentType={paymentType} />
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

        BoardContent = BoardAlgorithm(paymentTypes);

        return (
            <div className="container">
                <Link to="/payment_type/addPaymentType" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create new Payment type</i>
                </Link>
                <br />
                <hr />
                    {BoardContent}
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
