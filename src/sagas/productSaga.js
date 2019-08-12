import { takeEvery, call, put } from 'redux-saga/effects';
import { PRODUCTS } from '../constants';
import { fetchProducts } from '../services';
import { setProducts, setError } from '../actions/productAction';

function* handleProductsLoad() {
    try {
        const products = yield call(fetchProducts);
        yield put(setProducts(products));
    } catch (error) {
        yield put(setError(error));
    }
}

export default function* watchProductSaga() {
    yield takeEvery(PRODUCTS.LOAD, handleProductsLoad);
}

