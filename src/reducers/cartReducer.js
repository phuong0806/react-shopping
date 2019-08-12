import { CART } from "../constants";
import { combineReducers } from "redux";

const initialState = {
    checkoutState: {
        checkoutPending: false,
        error: null
    },
    quantityById: {}
}

function checkoutStatus(state = initialState.checkoutState, { type, payload }) {
    switch (type) {
        case CART.CHECKOUT_REQUEST:
            return {
                ...state,
                checkoutPending: true,
            }
        case CART.CHECKOUT_SUCCESS:
            return initialState.checkoutState
        case CART.CHECKOUT_FAILURE:
            return {
                ...state,
                checkoutPending: false,
                error: payload.error
            }
        default:
            return state;
    }
}

function quantityById(state = initialState.quantityById, { type, payload }) {
    switch (type) {
        case CART.ADD_TO_CART:
            return {
                ...state,
                [payload.productId]: (state[payload.productId] || 0) + 1,
            }
        case CART.REMOVE_FROM_CART:
            const quantity = (state[payload.productId] || 0) - 1;
            const copy = { ...state }
            quantity > 0 ? copy[payload.productId] = quantity : delete copy[payload.productId];
            return copy;
        case CART.CHECKOUT_SUCCESS:
            return initialState.quantityById;
        default:
            return state;
    }
}

export const getQuantityById = (state, productId) => state.quantityById[productId] || 0;

export const getAddedIds = state => Object.keys(state.quantityById);

export const getTotal = state => {
    return getAddedIds(state).reduce((sum, id) => {
        return sum + getQuantityById(state, id);
    }, 0);
}

export default combineReducers({
    checkoutStatus,
    quantityById
})