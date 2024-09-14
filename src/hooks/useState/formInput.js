import React,{useState} from 'react'

export default function FormInput() {
    const [text,setText]=useState('');
    const  handleChange=(e)=>{
        setText(e.target.value);
    }
  return (
    <div>
        <input placeholder='Enter the text' type='text' value={text} onChange={handleChange} maxLength={3} ></input>
        <p>{text}</p>
        
    </div>
  )
}
