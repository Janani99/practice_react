import React from 'react';
import {useState} from 'react'

export default function useCounter() {
    const [count,setCount]=useState(0);
    const Increment=()=>{
        setCount(prev=>prev+1);
    }
    const Decrement=()=>{
        setCount(prev=>prev-1);
    }


 
  return {count,Increment,Decrement};
     
}
