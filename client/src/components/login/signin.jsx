import { useState } from "react";


const Signin = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginstate,setloginstate] = useState('Login')
    
    const handleLogin = (e) => {
      e.preventDefault();
      // Your login logic here, such as API calls, authentication, etc.
      console.log('Logging in with:', { username, password });
      // Reset the form
      setUsername('');
      setPassword('');
    };

    const change =() =>{
            setloginstate('done')
    } 

    return(
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center w-full sm:max-w-md mx-auto p-4">
        <div className="bg-white bg-opacity-25 p-6 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">Login</h1>
          <form onSubmit={handleLogin}>
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
            <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2" onClick={change}>
              {loginstate}
            </button>
          </form>
        </div>
      </div>
    )
}

export default Signin