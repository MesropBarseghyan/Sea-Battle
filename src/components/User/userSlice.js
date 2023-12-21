import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
       userName:'----'
    },
    reducers:{
        setUserName(state,{payload}){
           state.userName = payload
        },
    }
})
export default userSlice.reducer
export const {setUserName} = userSlice.actions