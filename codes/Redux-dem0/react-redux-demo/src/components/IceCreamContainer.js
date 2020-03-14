import React from 'react';
import {connect, useSelector, useDispatch } from 'react-redux';
import {buyIceCream} from './redux';

const iceCreamContainer = () => {
        const numberOfIceCream = useSelector(state=> state.iceCream.numberOfIceCream);
        const dispatch = useDispatch()
    return ( 
        <div>
            <h1> Number of Ice Creams: {numberOfIceCream} </h1>
            
            <button onClick={()=> dispatch(buyIceCream())}>Buy iceCreams </button>
        </div>
     );
}

 
export default iceCreamContainer;