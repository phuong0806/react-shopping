import React, { Component } from 'react'
import List from './List';
import { connect } from 'react-redux';
import { getQuantityById, getAddedIds, getTotal } from './../../reducers/cartReducer';
import { getProduct } from './../../reducers/productReducer';
import { addToCart, removeFromCart } from '../../actions/cartAction';

import './Cart.scss';

class Cart extends Component {
    render() {
        const { listCartItems, addToCart, removeFromCart, totalProduct } = this.props;
        return (
            <List 
                items={listCartItems} 
                total={totalProduct}
                addToCart={addToCart} 
                removeFromCart={removeFromCart} />
        )
    }
}

const mapState = ({ cart, product }) => ({
    listCartItems: getAddedIds(cart).map(id => ({
        ...getProduct(product, id),
        quantity: getQuantityById(cart, id)
    })),
    totalProduct: getTotal(cart),
});

const mapDispatch = {
    addToCart,
    removeFromCart,
}


export default connect(mapState, mapDispatch)(Cart);
