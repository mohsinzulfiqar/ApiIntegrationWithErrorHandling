import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleUserData = createAsyncThunk('getSingleUserData', async () => {
    const response = await axios.get('https://randomuser.me/api/')
    return response.data?.results
})


const initialState = {
    users: [],
    status: 'success',
    error: null
}

const userSlice = createSlice({
    name: 'singleUser',
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(getSingleUserData.pending,(state,action)=>{
                state.status='pending'
        })
        builder.addCase(getSingleUserData.fulfilled,(state,action)=>{
                console.log("this is the action",action)
                state.users= action.payload
                state.status='success'
        })
        builder.addCase(getSingleUserData.rejected,(state,action)=>{
                state.error='Error'
        })
    }

})

// export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export default userSlice.reducer