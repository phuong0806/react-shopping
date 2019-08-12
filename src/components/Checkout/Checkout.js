import React, { Component } from 'react'
import Button from './../UI/Button';
import { connect } from 'react-redux';
import { checkout } from './../../actions/cartAction';
import { getAddedIds, getQuantityById } from './../../reducers/cartReducer';
import { getProduct } from './../../reducers/productReducer';
import Spinner from './../UI/Spinner';

import './Checkout.scss';

class Checkout extends Component {

    onClick = () => {
        this.props.checkout();
    }

    render() {
        console.log(this.props);
        const { totalPrice } = this.props;
        return (
            <>
                {this.props.checkoutStatus.checkoutPending && <Spinner />}
                <div className="Checkout">
                    <div className="Checkout__detail">
                        <span>SUBTOTAL</span>
                        <div className="Checkout__total">
                            <span>$ {totalPrice}</span>
                            <small>OR UP TO 9 x $ 16.32</small>
                        </div>
                    </div>
                    <Button 
                        style={{padding: '2.1rem', fontSize: '1.5rem', borderRadius: '0px'}} 
                        type="primary"
                        onClick={this.onClick}>
                            CHECKOUT
                    </Button>
                </div>
            </>
        )
    }
}

const mapState = ({ cart, product }) => ({
    totalPrice: getAddedIds(cart).reduce((sum, id) => {
        return sum + getProduct(product, id).price * getQuantityById(cart, id);
    }, 0),
    checkoutStatus: cart.checkoutStatus,
});

const mapDispatch = {
    checkout,
}


export default connect(mapState, mapDispatch)(Checkout);
