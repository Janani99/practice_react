import { configureStore } from "@reduxjs/toolkit";
import Calculator from './slice'

const Store=configureStore({
    reducer:{
        counter:Calculator
    }
})
export default Store;