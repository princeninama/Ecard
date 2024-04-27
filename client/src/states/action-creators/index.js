import { server } from "../api";
import axios from "axios";

export const signup = (email,password) => async (dispatch) => {
    try {
        const {data} =await axios.post(`${server}/api/user/new`,{email,password},{ withCredentials:true});

        dispatch({
            type:"signupsuccess",
            payload:data.message
        })

        console.log(data.message);
        document.cookie = `token=${data.token} expires=${new Date(Date.now() + 1000 * 60 * 60 * 24*5).toUTCString()} path=/`;
        return data
    } catch (error) {
     dispatch(
        {
            type:"signupfail",
            payload:"email already exist"
        }
     )
     
    }
  };