import React, { useEffect,useState } from 'react'

export default function UseEffectSample() {
    const [counter,setCounter]=useState(0);
    console.log("useEfffectSample");
    const incrementCount=()=>{
        console.log("increment count.....")
        setCounter(counter+1);
    }
    useEffect(()=>{
        console.log("component mounts");
        return ()=>{
            console.log("component unmounts");
        }
    },[])
  return (
    <div>
      <button onClick={incrementCount}>
        INCREMENT COUNT
      </button>
    </div>
  )
}
