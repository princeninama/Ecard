
import VideoSource from '../assets/bg-video/videoplayback.mp4'
import React, { useState } from 'react';
import Signin from '../components/login/signin';
import Signup from '../components/login/signup';

const Login = () =>{


  const [state,setstate] = useState(false)

   
    return(

        <div className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      >
        <source src={VideoSource} type="video/mp4" />
        {/* Add other video sources for different formats if needed */}
        Your browser does not support HTML5 video.

      </video>
      
      <Signup/>
    </div>
    )
}

export default Login;