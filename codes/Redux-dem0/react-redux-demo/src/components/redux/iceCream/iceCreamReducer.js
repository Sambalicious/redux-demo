
import { BUY_ICECREAM } from './iceCreamTypes';


const initialState = {
    numberOfIceCream: 20
}
 const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREAM : return {
            ...state, numberOfIceCream: state.iceCream.numberOfIceCream - 1
        }
            
            break;
    
        default: return state
            break;
    }
}

export default iceCreamReducer;
