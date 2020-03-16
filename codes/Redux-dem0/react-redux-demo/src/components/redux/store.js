import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './rootReducer';


const store = createStore(rootReducers,composeWithDevTools( applyMiddleware(logger)));

export default store;