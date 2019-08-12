import { PRODUCTS } from '../constants';

const loadProducts = () => ({
    type: PRODUCTS.LOAD,
});

const setProducts = data => ({
    type: PRODUCTS.LOAD_SUCCESS,
    payload: {
        data
    }
});

const setError = error => ({
    type: PRODUCTS.LOAD_FAIL,
    payload: {
        error
    }
});

export { loadProducts, setProducts, setError };