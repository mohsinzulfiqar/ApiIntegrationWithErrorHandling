import { configureStore } from "@reduxjs/toolkit";
import randomUserSlice from "./RandomUser/randomUserSlice";
import { getDefaultMiddleware } from '@reduxjs/toolkit';


const store = configureStore({
    reducer:{
        users:randomUserSlice
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})



export default store