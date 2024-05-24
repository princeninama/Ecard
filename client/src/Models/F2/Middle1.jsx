import React from "react";
import Navbar from "./Navbar";
import "./../../css/heart.css"
import img1 from "../../assets/couplle.jpg"
import img2 from "../../assets/couples.jpg"

const Middle1 = ({data}) => {
  return (
    <>
    <div className="h-screen bg-gradient-to-br  from-amber-200 via-purple-300 to-yellow-200">
      {/* <Navbar /> */}

      <div className="flex " id="box"> 
        <div className="border-1 shadow-2xl rounded-br-3xl border-black lg:h-[16rem] pl-4 pt-2 w-[12rem] mt-32 ml-32 bg-gradient-to-b  from-amber-200  to-purple-200">
          <img src={img1} className="h-60 shadow-2xl rounded-3xl" alt="" />
        </div>
        <div className="text-[13rem] lg:mt-20 lg:ml-36 font-Recursive" >
          {data.secondname}
          </div>
      </div>
      {/* <img src={heart} alt="" className="absolute"/> */}
      <div className="flex ml-[8rem] " id="box">
        <div className="text-[13rem] lg:mt-12">
          {data.firstname}
          </div>
        <div className="border-1 shadow-2xl rounded-br-3xl pl-4 border-black lg:h-[16rem] lg:w-[12rem] pt-2 lg:mt-12 lg:ml-36 bg-gradient-to-b  from-amber-200  to-purple-200">
          <img src={img2} className="h-60 shadow-2xl rounded-3xl" alt="" />
        </div>
      </div>
    </div>

    </>
  );
};
export default Middle1;
