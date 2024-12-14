import React from 'react'
import { decrement, increment, reset } from './slice';
 import { useDispatch,useSelector } from 'react-redux';


export default function ReduxCounter() {
    const storeDetails=useSelector((store)=>store.counter.count);
    console.log(storeDetails);
    const dispatch=useDispatch();
  return (
    <div>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Increment</button>
        <button onClick={()=>{dispatch(reset())}}>Increment</button>
        <h1>{storeDetails}</h1>


       
    </div>
  )
}
