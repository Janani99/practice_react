import React,{useRef} from 'react';
import { ForwardRefChildCustomInput } from './child';

 export const ForwardRefParentComponent=()=>{
    console.log("forwardRefParentComponen")
    const inputRef=useRef(null);
    const onhandleClick=()=>{
        console.log("onFocus");
        inputRef.current.focus();
    }
    
    return (
        
        <div>
            Forward Ref
            <ForwardRefChildCustomInput ref={inputRef} type="text" placeholder='enter the text'/>
            <button onClick={onhandleClick}>FOCUS CHILD INPUT</button>
        </div>
     )
}