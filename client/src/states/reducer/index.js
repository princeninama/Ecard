import { createReducer } from "@reduxjs/toolkit";
import { act } from "react";

export const userReducer = createReducer({}, (builder) => {
  builder
    .addCase("signupsuccess", (state,action) => {
        console.log('success in sign Up')
      state.auth = true;
      state.message = action.payload;
    })
    .addCase("signupfail",(state,action) => {
        console.log('failed in sign Up')
        state.auth = false;
        state.message = action.payload;
      })
    .addCase('changeTemplate',(state,action)=>{
      state.title = action.payload
    })
    
});
