import { server } from "../api";
import axios from "axios";

export const signup = (email, password) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      `${server}/api/user/new`,
      { email, password },
      { withCredentials: true }
    );

    dispatch({
      type: "signupsuccess",
      payload: data.message,
    });

    console.log("data : ", data);
    document.cookie = `token=${data.token} expires=${new Date(
      Date.now() + 1000 * 60 * 60 * 24 * 5
    ).toUTCString()} path=/`;
    return data;
  } catch (error) {
    console.log("errror in sign up is ", error);
    dispatch({
      type: "signupfail",
      payload: "email already exist",
    });
  }
};

export const login = async (username, password) => {
  try {
    const data = await axios.post(`${server}/api/user/login`, {
      username,
      password,
    });

    console.log("this is data = ", data);
    return data;
  } catch (error) {
    console.log("error in login", error);
  }
};

export const postupload = async (data) => {
  try {
    const resp = await axios.post(`${server}/api/user/post`, data);
    console.log(resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const loadtemplates = async (page, pagesize, row, col) => {
  try {
    const resp = await axios.get(
      `${server}/api/user/templates/${page}/${pagesize}/${row}/${col}`
    );
    console.log("data  ", resp.data);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const changeTemplates = (title) => (dispatch) => {
  dispatch({
    type: "changeTemplate",
    payload: title,
  });
};

export const forgetPassword = (mail) => async (dispatch) => {
  try {
    const data = await axios.post(`${server}/api/user/forget`, mail);
    console.log("data of forget password", data);
    dispatch({
      type: "ForgetPassword",
      payload: title,
    });
    return data;
  } catch (error) {
    console.log("error in forgot password", error);
  }
};

export const FormSubmit = async(data) => {
  try {
    console.log("data at api",data)
    const res=await axios.post(`${server}/api/ecard/form`,data);
    console.log("form's data is sent",res)
  } catch (error) {
    console.log("error in form submission",error);
  }
}


export const fetchEcardData = async(id)=>{
  try {
      const data = await axios.get(`${server}/api/user/getecard/${id}`);
      return data;
  } catch (error) {
    console.log(error)
  }
}