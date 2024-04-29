import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { signup } from "../../states/action-creators";
const Signup = () => {


  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { message,auth } = useSelector((state) => state.user);

  const notify = (Message) => toast(Message);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [hideForm, setHideForm] = useState(true); // State to control form visibility

  useEffect(() => {
    const text = "Welcome To Ecards! Let's Begin The Adventure";
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(intervalId);
        setHideForm(false); // Show the form after typewriter effect completes
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const handleSignup = async(e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert("Passwords don't match");
      notify("Passwords don't match");
      return;
    }
    const resp = await dispatch(signup(username,password));
    console.log('fetch success')
    // console.log(message,auth)
    notify(resp.message)
    if(resp.success)
    {
      navigate('/main')
    }
  };

  const HandleNavigate=()=>
  {
    navigate('/forget')
  }

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center w-full sm:max-w-md mx-auto p-4">
      <ToastContainer/>
      <div className="bg-black opacity-80  p-6 rounded-lg">
        <div id="typewriter" className="font-mono text-start mb-6"></div>

        {/* Conditional rendering of form based on hideForm state */}
        <div className="text-black ">
        {!hideForm && (
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-200 rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 rounded-lg p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirm Password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                className="bg-gray-200 rounded-lg p-2 w-full"
              />
            </div>
            <h1 onClick={HandleNavigate} className="font-mono text-white text-start underline hover:text-blue-400">
              Forget Password?
            </h1>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-300 text-white rounded-lg px-4 py-2 mt-4"
              
            >
              Sign Up
            </button>
          </form>
        )}
        </div>
      </div>
    </div>
  );
};

export default Signup;