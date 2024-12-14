import React, { useReducer } from 'react'

const reducers=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {count:state.count+1}
        case "decrement":
            return {count:state.count-1}
        case 'reset':
            return {count:0}
        default:
            throw new Error("error")


    }


}


export default function UseReducer() {
    const [state,dispatch]=useReducer(reducers,{count:0})
  return (
    <div>
        <h1>Use Reducers{state.count}</h1>
        <button onClick={()=>{dispatch({type:'increment'})}}>INCREMENT</button>
        <button onClick={()=>{dispatch({type:'decrement'})}}>DECREMENT</button>
        <button onClick={()=>{dispatch({type:'reset'})}}>RESET</button>


      
    </div>
  )
}
