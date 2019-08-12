import { PRODUCTS } from '../constants';

const initialState = {
    isFetching: false,
    isSuccess: false,
    isError: null,
    visibleIds: [],
}

const products = (state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCTS.LOAD:
            return {
                ...state,
                isFetching: true,
            }
        case PRODUCTS.LOAD_SUCCESS: 
            console.log('payload', payload);
            return {
                ...state,
                ...payload.data.reduce((obj, product) => {
                    obj[product.id] = product;
                    return obj;
                }, {}),
                visibleIds: payload.data.map(product => product.id),
                isFetching: false,
                isSuccess: true,
            }
        case PRODUCTS.LOAD_FAIL:
            return {
                ...state,
                isFetching: false,
                isSuccess: false,
                isError: payload.error,
                visibleIds: []
            }
        default:
            return state;
    }
}

export const getProduct = (state, id) => state[id];

export const getVisibleProducts = (state) => state.visibleIds.map(id => getProduct(state, id));

export default products;