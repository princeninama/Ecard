import { server } from "../api";
import axios from "axios";

export const login = (username,email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });

     const {data} = await axios.post(
      `${server}/api/user/login`,
      { username, email, password },
      {
        withCredentials: true,
      }
    );
      dispatch({
        type: "loginSuccess",
        payload: data.message,
      });
    
      // console.log(data.token);
      document.cookie = `token=${data.token} expires=${new Date(Date.now() + 1000 * 60 * 60 * 24*5).toUTCString()} path=/`;
      // console.log(document.cookie)
      // console.log(data.user.name)
  } catch (error) {
    dispatch({
      type: "loginFail",
      payload:  "Login Failed",
    });
    console.log("Login Failed")
    console.log(error);
    
  }
};
export const signup = (formData) => async (dispatch) => {
  try {
    // const navigate = useNavigate();
    dispatch({
      type: "registerRequest",
    });
    const { data } = await axios.post(`${server}/api/user/new`, formData, {
      // headers: {
      //   "Content-Type": "multi-part/form-data",
      // },
      withCredentials: true,
    });
    
    dispatch({
      type: "registerSuccess",
      payload: data.message,
    });
    console.log(data.message);
    // navigate("/profile")
  } catch (error) {
    dispatch({
      type: "registerFail",
      // payload: error.response.data.message,
    });
    console.log(error);
    console.log(error.response);
  }
};




