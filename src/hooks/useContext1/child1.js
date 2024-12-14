import React, { useContext } from 'react';
import { contextDetails } from '.';

export default function Child1() {
    const {string}=useContext(contextDetails)
  return (
    <div>
      <h2>{string}</h2>
    </div>
  )
}
