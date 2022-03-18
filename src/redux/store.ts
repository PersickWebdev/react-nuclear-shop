import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { DataReducer } from './reducers';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    DataReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));