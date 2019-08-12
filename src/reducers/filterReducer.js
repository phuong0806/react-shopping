import { FILTER } from '../constants';

const initialState = {
    visibleType: [],
};

const filterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FILTER.LOAD:
            return {
                ...state,
                visibleType: state.visibleType.concat(payload.type),
                [payload.type]: {
                    type: payload.type,
                    isChecked: false,
                    error: null,
                }
            }
        case FILTER.TOGGLE_CHECKED:
            return {
                ...state,
                [payload.type]: {
                    ...state[payload.type],
                    isChecked: !state[payload.type].isChecked,
                }
            }
        case FILTER.LOAD_FAIL: 
            return {
                ...state,
                [payload.type]: {
                    ...state[payload.type],
                    error: payload.error,
                }
            }
        default:
            return state;
    }
}

export const getType = (state, type) => state[type];  

export const getVisibleType = state => state.visibleType.map(type => getType(state));

export default filterReducer;