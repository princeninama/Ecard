import { useState } from "react";

const Signup = () =>{

    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert("Passwords don't match");
      return;
    }
    // Your signup logic here, such as API calls, user creation, etc.
    console.log('Signing up with:', { username, password });
    // Reset the form
    setUsername('');
    setPassword('');
    setRepeatPassword('');
  };

    return(
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-black text-center w-full sm:max-w-md mx-auto p-4">
        <div className="bg-white bg-opacity-25 p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
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
                placeholder="Repeat Password"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                className="bg-gray-200 rounded-lg p-2 w-full"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2 ">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    )
}

export default Signup