 
import React,{useState} from 'react'

export default function Counter() {

  
    console.log("usetate Example")
    const [count,setCount]=useState(0);
    const onincrement=()=>(setCount((ps)=>ps+1))
    const onDecrement=()=>setCount((ps)=>ps-1)
  return (
    <div>
        counter : {count}<br></br>
        <button onClick={onincrement}>INCREMENT COUNT </button>
        <button onClick={onDecrement}>DECREMENT COUNT</button>
    </div>
  )



}
