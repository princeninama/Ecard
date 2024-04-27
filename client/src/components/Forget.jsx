import React, { useState } from "react";

const Forget = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);

  const handleHide = () => {
    setShowResetForm(true);
  };

  const handleSubmit = () => {
    // Logic to handle form submission
  };

  return (
    <div className="h-screen flex justify-center bg-gray-800 items-center">
        <h1 className="font-mono absolute text-white mb-[32rem]">
            Forget Password?
        </h1>
      <div className="bg-gray-200 text-black max-w-md w-full mx-auto px-6 py-8 rounded-lg shadow-lg">
        <input
          type="email"
          className="border-2 px-3 py-2 w-full"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="Enter E Mail Id"
        />
        <button className="border-2 mt-3 w-full" onClick={handleHide}>
          Get Otp
        </button>

        {showResetForm && (
          <div>
            <input
              type="password"
              value={password}
              className="border-2 px-3 py-2 mt-3 w-full"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password Here"
            />
            <input
              type="password"
              value={cpassword}
              className="border-2 px-3 py-2 mt-3 w-full"
              onChange={(e) => setCpassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <button onClick={handleSubmit} className="bg-blue-200 px-3 py-2 mt-4 w-full">
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forget;
