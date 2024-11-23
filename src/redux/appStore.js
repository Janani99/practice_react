import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './slice1'
 
const appStore = configureStore(
    {
        
        reducer: {/// modifies  the update the app store
            cart: cartSlice
        }
    }

);// create the store for the app

export default appStore;