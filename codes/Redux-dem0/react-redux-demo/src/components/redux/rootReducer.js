
import { combineReducers } from 'redux'
import cakeReducer from './cakes/CakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';

const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

export default rootReducers;