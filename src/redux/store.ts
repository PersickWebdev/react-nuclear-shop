import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { DataReducer, CartReducer } from './reducers';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    DataReducer,
    CartReducer,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));