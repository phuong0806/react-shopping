import { all } from 'redux-saga/effects';

import productSaga from './productSaga';
import filterSaga from "./filterSaga";
import cartSaga from './cartSaga';

function* rootSaga() {
    yield all([
        productSaga(),
        filterSaga(),
        cartSaga(),
    ]);
}

export default rootSaga;