import { createStore } from 'redux';
import cakeReducer from '../redux/cakes/CakeReducer';
import { iceCreamReducer }  from '../redux/iceCream/iceCreamReducer';

const store = createStore(cakeReducer);

export default store;