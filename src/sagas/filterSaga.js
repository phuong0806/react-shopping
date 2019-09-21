import { take, fork, put, takeEvery, select, call, throttle, takeLatest, debounce } from 'redux-saga/effects';
import { PRODUCTS, FILTER } from '../constants';
import { loadFilter, setError } from '../actions/filterAction';
import { setProducts, loadProducts } from '../actions/productAction';
import { fetchProducts } from '../services';
import { getVisibleProducts } from '../reducers/productReducer';

export default function* watchFilterSaga() {
    yield fork(handleFiltersLoad);
    yield takeEvery(FILTER.TOGGLE_CHECKED, handleProductsByFilter);
    yield debounce(500, FILTER.SEARCH_FILTER, handleSearchFilter);
}

function* handleSearchFilter({ payload: { text } }) {
    try {
        console.log("TCL: function*handleSearchFilter -> text", text)
        yield put(loadProducts());
        let products = yield call(fetchProducts);
        if(text.length) {
            products = products.filter(p => p.title.toLowerCase().startsWith(text.toLowerCase()));
        }
        yield put(setProducts(products));     
    } catch (error) {
        yield put(setError(error));
    }
}

function* handleFiltersLoad() {
    try {
        yield take(PRODUCTS.LOAD_SUCCESS);

        const productState = yield select(state => state.product);

        const products = getVisibleProducts(productState);

        const types = new Set(products.map(p => p.sizes))

        for (const type of Array.from(types)) {
            yield put(loadFilter(type));
        }
    } catch (error) {
        yield put(setError(error));
    }
}

function* handleProductsByFilter() {
    try {
        yield put(loadProducts());

        const filters = yield select(state => state.filter);
        let products = yield call(fetchProducts);
        
        const arrFilter = [];

        for (const key in filters) {
            const filter = filters[key];
            if(filter.hasOwnProperty('isChecked') && filter.isChecked) {
                arrFilter.push(filter.type);
            }
        }

        if (arrFilter.length > 0) {
            products = products.filter(p => arrFilter.includes(p.sizes));
        }             

        yield put(setProducts(products));

    } catch (error) {
        yield put(setError(error));
    }
}
