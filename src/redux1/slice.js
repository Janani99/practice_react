import { createSlice } from "@reduxjs/toolkit"
const Calculator=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state,_action)=>{
            console.log("increment",state,_action)
           return {...state,count:state.count+1}
        },
        decrement:(state,_action)=>{
           return {...state,count:state.count-1}
        },
        reset:(state,_action)=>{
          return {...state,count:0}}
        }
    }

)
 export const {increment,decrement,reset}=Calculator.actions;
 export default Calculator.reducer;
 