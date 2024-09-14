import React,{useState,useRef} from 'react'

export default function CounterRef() {
    const [count, setCount] = useState(0);
    const renders = useRef(0); // Track how many times the component has rendered
  
    renders.current += 1; // Update the current render count
  
    return (
      <div>
        <p>Count: {count}</p>
        <p>Component rendered: {renders.current} times</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  
}
