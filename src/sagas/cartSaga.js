import { takeEvery, call, put, takeLatest, delay } from 'redux-saga/effects';
import { checkout, checkoutSuccess, checkoutFailure } from '../actions/cartAction';
import { CART } from '../constants';
import { fetchProducts } from '../services';

export default function* watchCartSaga() {
    yield takeLatest(CART.CHECKOUT_REQUEST, handleCheckout);
}

function* handleCheckout() {
    try {
        console.log('watchSagaCart');
        yield delay(1000);
        yield put(checkoutSuccess());
    } catch (error) {
        yield put(checkoutFailure());
    }
}