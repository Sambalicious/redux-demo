import React from 'react';
import { BUY_ICECREAM } from './iceCreamTypes';


const initialstate = {
    numberOfIceCream: 20
}

const iceCreamreducer = (state = initialstate, action) => {
    switch (action.type) {
        case BUY_ICECREAM : return {
            ...state, numberOfIceCream: state.numberOfIceCream - 1
        }
            
            break;
    
        default: return state
            break;
    }
}

export default iceCreamreducer;