import React from 'react';
import useCounter from './customhook';

export default function CustomHook() {
    const {count,Increment,Decrement}=useCounter();
  return (
    <div>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <h1>{count}</h1>
 </div>
  )
}
