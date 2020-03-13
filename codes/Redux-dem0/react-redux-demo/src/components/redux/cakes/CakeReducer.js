
import { BUY_CAKE } from '../CakeTypes';

const initialState = {
    numberOfCakes : 10
}

const cakeReducer = (state=initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state, numberOfCakes: state.numberOfCakes - 1
        }
            
            break;
    
        default: return state
            break;
    }
}

export default cakeReducer;