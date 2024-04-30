export const server = "http://localhost:8000";

import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './reducer/index';

export const store = configureStore({

    reducer: {
        user: userReducer,
        // post: postReducer,
    },
});
export const login = async(username,password)=>
{
    try {
        const data=await axios.post(`${server}/api/user/login`,{username,password})
        
        console.log("this is data = ",data)
        return data;
    } catch (error) {
        console.log("error in login",error)
        
    }
};