import React,{useState,useRef,useEffect} from 'react'

export default function Timer() {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();//create  a ref to hold the previous count value;

    useEffect(() => {
        console.log("useEffect");
        prevCountRef.current = count;

    }, [count]);
    console.log("timer......");
    return (
        <div>
            <p>Current Count:{count}</p>
            <p>Previos count :{prevCountRef.current}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>{prevCountRef.current = count}}>CLICK BUTTON </button>

        </div>
    )
}
