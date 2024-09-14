import React,{useState,useCallback} from 'react'
import Child from './child';

export default function Parent() {
const [number,setNumber]=useState(0);
const [dark,setDark]=useState(false);
const getItems=useCallback(()=>{
    console.log('callback')
    return [number,number+1];
},[number])
  return (
    <div>
    <p>{number}</p>
    <button  onClick={() => { setNumber(ps => ps + 1) }} >increment count</button>
    <button  onClick={() => { setDark(!dark)}} > change </button>

       <Child getItems={getItems}/>
    </div>
  )
}
