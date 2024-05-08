import React, { useState } from "react";
import { useSelector } from "react-redux";
import videoBg from "../../assets/v3.mp4";
import couple from "../../assets/couples.jpg";
import garba from "../../assets/Navratri.avif";
import mrgdone from "../../assets/mrgdone.jpeg";
import dine from "../../assets/dine.jpeg";
import hastmelap from "../../assets/hastmelap.webp";
import car from "../../assets/car.jpeg";
import "./style.css";

const Home = () => {
  return (
    <>
      <div className="mt-0 w-full h-full z-10 relative">
        <video
          src={videoBg}
          autoPlay
          muted
          loop
          className=" w-full h-full object-cover"
        ></video>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="w-[50%] h-full item-center p-10">
            <img
              src={couple}
              className=" h-24 rounded-full lg:h-[24rem] lg:mt-40 lg:ml-32 shadow-lg shadow-red-100  w-auto"
              alt=""
            />
          </div>
          <div className="w-[50%] h-full mt-6">
            <div className="  text-orange-100 lg:ml-16 lg:mt-56">
              <p className=" text-[0.8rem] z-10 font-serif lg:text-2xl">MAY 2ND 2024</p>
              <p className="text-[2rem] font-serif lg:text-[5rem]  z-10 text-shodaow-lg shadow-red-200">

              </p>
              <p className="font-serif text-[0.5rem] lg:text-[2rem] text-red-200">

              </p>
              <p className="text-[2rem] font-serif lg:text-[5rem] z-10">

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-red-50 to-red-200 w-[100%] h-[60rem] relative   lg:h-[65rem]  pt-12" id="eventsSection">
        <div className="text-black text-left text-[1rem] p-3 lg:ml-8 lg:text-3xl">
          <h1 className="">01 MAY</h1>
          <h1 className=""> Wednesday</h1>
        </div>
        <div className="lg:flex  lg:pl-[18rem]">
          <div className="flip-card ">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={mrgdone}
                  className="h-[7rem] lg:h-[18rem] lg:mt-56 w-auto mt-12"
                  alt=""
                />
              </div>
              <div className="flip-card-back w-40 text-black">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam

                </p>
                <p>10 AM</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={garba}
                  className="h-[7rem] w-auto lg:h-[18rem] lg:mt-56 mt-40"
                  alt=""
                />
              </div>
              <div className="flip-card-back w-40 text-black">
                <p></p>
                <p>9 PM</p>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={dine}
                  className="h-[7rem] w-auto lg:h-[18rem] lg:mt-56 mt-[17rem]"
                  alt=""
                />
              </div>
              <div className="flip-card-back w-40 text-black">
                <p>Jamanwar</p>
                <p>9 AM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-left text-[1rem] p-3 mt-[12rem] lg:text-3xl lg:ml-8 lg:mt-64">
          <h1 className=""></h1>
          <h1 className="">THURSDAY</h1>
        </div>
        <div>
          <div className="lg:flex sm:flex-row sm:space-x-4 lg:pl-[15rem] lg:pl-[24rem]">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={car}
                    className="h-[7rem] lg:h-[14rem] lg:mt-56 w-auto mt-12"
                    alt=""
                  />
                </div>
                <div className="flip-card-back w-40 text-black">
                  <p></p>
                  <p>9 AM</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={hastmelap}
                    className="h-[7rem] w-auto lg:mt-56  lg:h-[14rem] mt-[10rem]"
                    alt=""
                  />
                </div>
                <div className="flip-card-back w-40 text-black">
                  <p>

                  </p>
                  <p>11 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
