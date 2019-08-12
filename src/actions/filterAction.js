import {
    FILTER
} from '../constants';

const loadFilter = type => ({
    type: FILTER.LOAD,
    payload: {
        type
    }
});

const toggleFilter = type => ({
    type: FILTER.TOGGLE_CHECKED,
    payload: {
        type,
    }
});

const searchFilter = text => ({
    type: FILTER.SEARCH_FILTER,
    payload: {
        text
    }
})

const setError = (type, error) => ({
    type: FILTER.LOAD_FAIL,
    payload: {
        type,
        error
    }
});

export {
    loadFilter,
    toggleFilter,
    setError,
    searchFilter
};