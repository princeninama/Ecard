import VideoSource from "../../public/darkbg.mp4";
import React, { useState } from "react";
import Signin from "../components/login/signin";
import Signup from "../components/login/signup";
import { Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const [state, setstate] = useState(false);
  const navigate = useNavigate()
  const handleSignin=()=>{
    navigate('/login/signin')
  }
  return (
    <div className=" h-screen">
      <div className="flex absolute w-full p-2 z-10 bg-transparnet">
        <div className=" flex items-center cursor-pointer">
          <span className="text-3xl font-bold brand-text ml-3 mt-1">
            <span className="text-5xl  font-bold">E</span>cards
          </span>
        </div>

        <div className="ml-[60rem] font-bold text-white mt-3">
          Already Have An Account?
        </div>
        <button className="ml-8 text-white" onClick={handleSignin}>Sign In</button>

      </div>
      <video
        autoPlay
        muted
        loop
        className="w-full h-screen object-cover opacity-90 absolute top-0 left-0 z-0 "
      >
        <source src={VideoSource} type="video/mp4" />
        {/* Add other video sources for different formats if needed */}
        Your browser does not support HTML5 video.
      </video>

      <Signup />
    </div>
  );
};

export default Login;