import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
    response: null,
    error: null
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_RESPONSE':
            return { ...state, response: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

export const store = createStore(rootReducer, applyMiddleware(thunk));
