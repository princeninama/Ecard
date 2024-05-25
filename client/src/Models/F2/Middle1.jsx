import React from "react";
import "./../../css/heart.css";
import img1 from "../../assets/couplle.jpg";
import img2 from "../../assets/couples.jpg";

const Middle1 = ({ data }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-200 via-purple-300 to-yellow-200 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row items-center justify-center mb-12" id="box">
        <div className="border-1 shadow-2xl rounded-br-3xl border-black lg:h-[16rem] p-2 pt-2 w-[12rem] mt-8 lg:mt-32 lg:ml-32 bg-gradient-to-b from-amber-200 to-purple-200">
          <img src={img1} className="h-60 w-full object-cover shadow-2xl rounded-3xl" alt="Couple 1" />
        </div>
        <div className="text-4xl lg:text-[13rem]  lg:ml-36 font-Recursive mt-4 lg:mt-0 text-center lg:text-left">
          {data.secondname}
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center justify-center" id="box">
        <div className="text-4xl lg:text-[13rem] lg:mt-12 text-center lg:text-right">
          {data.firstname}
        </div>
        <div className="border-1 shadow-2xl rounded-br-3xl p-2 border-black lg:h-[16rem] lg:w-[12rem] pt-2 mt-8 lg:mt-12 lg:ml-36 bg-gradient-to-b from-amber-200 to-purple-200">
          <img src={img2} className="h-60 w-full object-cover shadow-2xl rounded-3xl" alt="Couple 2" />
        </div>
      </div>
    </div>
  );
};

export default Middle1;
