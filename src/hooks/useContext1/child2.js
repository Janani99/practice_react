import React, { useContext,useState } from 'react';
import { contextDetails } from '.';

export default function Child2() {
    const {string}=useContext(contextDetails);
    const [state,setState]=useState(string)
  return (
    <div>
      <h2>{state}</h2>
      <buttton  onClick={()=>{setState('jjhjhjhh')}}>Press</buttton>
    </div>
  )
}
