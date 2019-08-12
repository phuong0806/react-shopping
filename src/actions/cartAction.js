import { CART } from '../constants';

const addToCart = productId => ({ 
    type: CART.ADD_TO_CART, 
    payload: { productId }
});

const removeFromCart = productId => ({
    type: CART.REMOVE_FROM_CART,
    payload: { productId }
});

const checkout = () => ({
    type: CART.CHECKOUT_REQUEST,
});

const checkoutSuccess = () => ({
    type: CART.CHECKOUT_SUCCESS,
});

const checkoutFailure = () => ({
    type: CART.CHECKOUT_FAILURE,
});

export {
    addToCart,
    removeFromCart,
    checkout,
    checkoutSuccess,
    checkoutFailure,
}