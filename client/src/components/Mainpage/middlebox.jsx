import React, { useRef, useState } from 'react';
// Import Swiper React components
import FadeIn from 'react-fade-in';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom'
// Import Swiper styles
import 'swiper/css';
const Middlebox = () => {

  const navigator = useNavigate()
  return (
    <div className="mx-2 md:mx-4 lg:mx-6 h-[21rem] xl:mx-8 mt-7  rounded-lg overflow-hidden relative shadow-lg flex justify-center items-center">
      <div className="absolute inset-x-0 z-10 top-8 text-center text-2xl font-semibold text-gray-600"></div>
      <div className="absolute w-full h-full bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
      <div className='absolute bottom-0 mb-5 ml-[44%]'>
        <FadeIn>

        <button onClick={()=>{navigator("/general")}} className='border-2 rounded-2xl bg-transparent p-4 hover:bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200  hover:p-6 hover:w-auto'>
         <p className='text-blue-700 underline'>
          Enter Your Details
          </p> 
        </button>
        </FadeIn>
      </div>
      </div>
      {/* <div className="absolute mt-24 " style={{ top: "-30px" }}>
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-400 rounded-md py-3 pl-12 pr-4 focus:outline-none focus:border-indigo-500 w-full md:w-80 h-10 text-gray-700 bg-white"
        />

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-4 top-3 text-gray-600"
        >
          <path
            d="M17.928 1.048c.013-.064.13-.064.144 0 .115.543.38 1.51.875 2.005.495.496 1.462.76 2.006.875.063.013.063.13 0 .144-.544.115-1.51.38-2.006.875-.496.495-.76 1.462-.875 2.005-.013.064-.13.064-.144 0-.115-.543-.38-1.51-.875-2.005-.495-.496-1.462-.76-2.006-.875-.063-.013-.063-.13 0-.144.544-.115 1.51-.38 2.006-.875.496-.495.76-1.462.875-2.005ZM13.067 4.046c-.012-.061-.122-.061-.134 0-.133.67-.477 2.044-1.16 2.727-.683.683-2.057 1.027-2.727 1.16-.061.012-.061.122 0 .134.67.133 2.044.477 2.727 1.16.683.683 1.027 2.057 1.16 2.727.012.061.122.061.134 0 .133-.67.477-2.044 1.16-2.727.683-.683 2.057-1.027 2.727-1.16.061-.012.061-.122 0-.134-.67-.133-2.044-.477-2.727-1.16-.683-.683-1.027-2.057-1.16-2.727Z"
            fill="currentColor"
          />
          <path
            d="M2 11.5a7.5 7.5 0 0 0 12.202 5.843l4.156 4.157a1 1 0 1 0 1.415-1.414l-4.193-4.193A7.46 7.46 0 0 0 16.984 12h-1.505A6 6 0 1 1 9 5.52V4.017A7.5 7.5 0 0 0 2 11.5Z"
            fill="currentColor"
          />
        </svg>
      </div> */}
      {/* {circles.map((circle) =>(
        <div
        key={circle.id}
        className={`text-center cursor-pointer `}
        onClick={() => handleCircleClick(circle.id)}
        >
        <div className={`w-12 h-12 bg-white rounded-full transition-shadow shadow-slate-900    ${selectedCircle === circle.id ? 'shadow-sm' :''}`}></div>
        
        </div>
      ))} */}
      <div className=" w-full  ">
      <Swiper
        slidesPerView={4}
        spaceBetween={50}

        className="mySwiper w-full "
        style=
        { {width: '90%'} }
      >
        <SwiperSlide className=''>
          <div className=" cursor-pointer h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300">
            Birthday
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" cursor-pointer h-32 w-40 mr-7 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300">
            Valentine's Day
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300 cursor-pointer">
            Wedding
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300 cursor-pointer">
            Holiday Celebrations
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300 cursor-pointer">
            Anniversary
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300 cursor-pointer">
            Graduation
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300 cursor-pointer">
            Baby Shower
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300 cursor-pointer">
            Retirement Party
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300 cursor-pointer">
            Farewell Party
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-32 w-40 rounded-lg flex justify-center items-center bg-gradient-to-br from-pink-100 via-orange-50 to-pink-300 cursor-pointer">
            Engagement Party
          </div>
        </SwiperSlide>
        </Swiper>
      </div>
      
    </div>
  );
};

export default Middlebox;
