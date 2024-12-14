import React, { createContext } from 'react';
import Child1 from './child1';
import Child2 from './child2';
export const contextDetails=createContext({})
export  default function UseContextExample(){
    const string='usecontextString'
  return (
    <contextDetails.Provider value={{string}}>
        <div >
       <h1>usecontext</h1>
       <Child1/>
       <Child2/>
      
    </div>

    </contextDetails.Provider>
    
  )
}
