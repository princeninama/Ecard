import React from "react";
import Navbar from "../Mainpage/navbar.jsx";
import Image1 from "../../../public/sample3.png";
const HIghllights = () => {
  return (
    <div>
      <Navbar />
      <div className="h-full w-full p-12 bg-gradient-to-b from-slate-200 to-pink-200">
        <div className="flex">
          <div className="border-2 rounded-md drop-shadow-2xl w-[40rem] border-black">
            <img src={Image1} alt="" />
          </div>
          <div className="border-2 rounded-tl-3xl rounded-br-2xl font-serif text-4xl h-[32rem] w-[22rem] ml-32 p-12 border-black">
            <h1>
              “ To get the full value of joy you must have someone to divide it
              with. ”
            </h1>
          </div>
        </div>
        <div className="flex mt-24">
          <div className="border-2 mr-32 ml-40 rounded-tl-3xl rounded-br-2xl font-serif text-4xl h-[32rem] w-[22rem]  p-12 border-black">
            <h1>
              “ To get the full value of joy you must have someone to divide it
              with. ”
            </h1>
          </div>
          <div className="border-2 rounded-md  drop-shadow-2xl w-[40rem] border-black">
            <img src={Image1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HIghllights;
