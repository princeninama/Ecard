import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image1 from '../../assets/f2Assets/sample1.png'
import Image2 from '../../assets/f2Assets/sample2.png'
import Image3 from '../../assets/f2Assets/sample3.jpg'
import Image4 from '../../assets/f2Assets/sample4.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const Album = () => {
  return (
    <>
    <div className='h-screen bg-gradient-to-b from-stone-200 via-cyan-100 via-sky-200 via-blue-300 via-indigo-300 via-violet-400 via-purple-400 to-fuchsia-500 flex items-center justify-center'>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}


export default Album