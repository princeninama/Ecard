import React, { useState, useEffect } from "react";
import "./../../../css/heart.css";
import Image1 from "../../../assets/couplle.jpg";
import Image2 from "../../../assets/couples.jpg";

const DesktopView = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textContent1, setTextContent1] = useState([]);
  const [textContent2, setTextContent2] = useState([]);
  const images = [Image1, Image2];

  useEffect(() => {
    if (data && data.events) {
      const eventNames = data.events.map(event => event.name);
      const eventDates = data.events.map(event => event.date);
      setTextContent1(eventNames);
      setTextContent2(eventDates);
    }
  }, [data]);

  const changeSlide = (newSlide) => {
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="flex">
      <div className="relative bg-purple-200 h-screen w-[40%]">
        <button
          className="prev-arrow text-[15rem] opacity-10 mt-40 ml-[-1rem]"
          onClick={() =>
            changeSlide((currentSlide - 1 + images.length) % images.length)
          }
        >
          &#8249; 
        </button>
        <img
          src={images[currentSlide]}
          alt=""
          className="h-80 left-40 z-40 bottom-56 absolute rounded-l-3xl drop-shadow-2xl"
        />
        <div className="absolute top-[6.3rem] left-24 bg-gradient-to-tr from-amber-200 via-purple-300 to-yellow-200 border-none rounded-tl-full border-black h-[37.4%] w-[19rem]"></div>
        <div className="absolute bottom-24 left-24 bg-gradient-to-br from-amber-200 via-purple-300 to-yellow-200 border-none rounded-bl-full border-black h-[37.4%] w-[19rem]"></div>
      </div>

      <div className="bg-yellow-50 w-[62%] h-screen">
        <button
          className="next-arrow text-[15rem] opacity-10 mt-40 ml-[49rem]"
          onClick={() =>
            changeSlide((currentSlide + 1) % images.length)
          }
        >
          &#8250; 
        </button>
        <div className=" w-[60%] text-[12rem] ml-16 mt-[-19rem]" id="slider">
          {textContent1[currentSlide]}
        </div>
        <div className="w-[60%] text-[3rem] ml-32" id="slider">
          {textContent2[currentSlide]}
        </div>
      </div>
    </div>
  );
};

export default DesktopView;
