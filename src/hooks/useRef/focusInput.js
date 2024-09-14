import React,{useRef} from 'react'

export default function FocusInput() {
    const inputRef=useRef(null);// create a ref object
    const handleFocus=()=>{
        inputRef.current.focus(); //Acees the DOM node and focus it
    } 

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='enter the text'></input>
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}
