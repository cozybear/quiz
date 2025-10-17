import { configureStore } from "@reduxjs/toolkit";
import  { default as dbReducer } from '../store/dbSlice';
import {  default as authReducer } from '../store/authSlice';
import { default as scoreReducer } from '../store/scoreSlice';



const store = configureStore({

    reducer: {
        class: dbReducer,
        user: authReducer,
        score: scoreReducer,
    }
})


export default store;