import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/User/userSlice"


export const store = configureStore({
    reducer:{
       userName:userReducer,
    }
})
