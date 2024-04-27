import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./../../css/heart.css";
import Image1 from "../../assets/couplle.jpg";
import Image2 from "../../assets/couples.jpg";
const Middle2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Image1, Image2]; // Add more image paths as needed
  const textContent1 = ["Haldi", "Sangeet"]; // Add more text as needed
  const textContent2 = ["02-05-2004", "03-05-2004"]; // Add more text as needed
  const changeSlide = (newSlide) => {
    setCurrentSlide(newSlide);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Change the slide every 3 seconds (adjust as needed)
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
    <div className="flex">
      <div className="bg-purple-200 h-screen  w-[40%]">
        <button className="prev-arrow absolute text-[15rem] opacity-10 mt-40 ml-[-1rem]" onClick={() => changeSlide((currentSlide - 1 + images.length) % images.length)}>
          &#8249; {/* Left arrow character */}
        </button>
        <img
          src={images[currentSlide]}
          alt=""
          className="h-80 absolute ml-64 mt-56 z-30 rounded-l-3xl drop-shadow-2xl"
        />
        <div className="bg-gradient-to-tr  from-amber-200 via-purple-300 to-yellow-200 mt-24 ml-28 border border-none rounded-tl-full border-black h-[37.4%] border-collapse w-[31.4%] absolute"></div>
        {/* <img src={Image} alt="" className="h-80 absolute ml-64 mt-56 z-30" /> */}
        <div className="bg-gradient-to-br  from-amber-200 via-purple-300 to-yellow-200  border border-none ml-28 rounded-bl-full border-black h-[37.4%] w-[31.4%] absolute mt-96"></div>
      </div>
      <div className="bg-yellow-50 w-[62%] h-screen">
        <button className="next-arrow absolute text-[15rem] opacity-10 mt-40 ml-[49rem]" onClick={() => changeSlide((currentSlide + 1 + images.length) % images.length)}>
          &#8250; {/* Right arrow character */}
        </button>
        <div className="absolute w-[60%] text-[12rem] mt-56 ml-16 " id="slider">
          {textContent1[currentSlide]}
        </div>
        <div className="w-[60%] absolute text-[3rem] mt-[31rem] ml-16" id="slider">
          {textContent2[currentSlide]}
        </div>
      </div>
    </div>
    </>
  );
};

export default Middle2
