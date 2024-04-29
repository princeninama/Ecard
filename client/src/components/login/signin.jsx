import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Video from "../../../public/smoke.mp4"
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginstate, setloginstate] = useState("Login");
  const navigate = useNavigate()
  const handleSignup=()=>{
    navigate('/signup')
  }
  const handleLogin = (e) => {
    e.preventDefault();
    // Your login logic here, such as API calls, authentication, etc.
    console.log("Logging in with:", { username, password });
    // Reset the form
    setUsername("");
    setPassword("");
  };

  const change = () => {
    setloginstate("done");
  };

  return (
    <div className="relative">
      <video src={Video} className="absolute w-full" loop autoPlay muted/>
       <div className="flex absolute w-full p-2 z-10 bg-transparnet">
        <div className=" flex items-center cursor-pointer">
          <span className="text-3xl font-bold brand-text ml-3 mt-1">
            <span className="text-5xl  font-bold">E</span>cards
          </span>
        </div>

        <div className="ml-[60rem] font-bold text-white mt-3">
          Not Have An Account?
        </div>
        <button className="ml-8 text-white" onClick={handleSignup} >Sign Up</button>

      </div>
      {/* <div className="z-10  bg-[#21272b] text-white text-center w-full sm:max-w-md mx-auto p-4"> */}
      <div className="bg-black bg-opacity-75 p-6 rounded-lg absolute mt-60 ml-[32rem] text-white text-center w-full sm:max-w-md  ">
        <h1 className="text-4xl font-mono mb-4 font-extrabold">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-gray-200 rounded-lg p-2 w-full text-black"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-200 rounded-lg p-2 w-full text-black"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2"
            onClick={change}
          >
            {loginstate}
          </button>
        </form>
      </div>
    </div>
    // </div>
  );
};

export default Signin;