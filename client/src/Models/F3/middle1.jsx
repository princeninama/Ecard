import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import Haldi from './images/haldi.png'
import Engagement from './images/engagement.png'
import Engage from './images/engage1.png'
import { FaArrowAltCircleUp } from "react-icons/fa";
// import Engage2 from '../../assets/f2Assets/engage2.png'

// import BW from '../../assets/f2Assets/bw1.jpg'
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './styles.css';



import { Fade, AttentionSeeker, } from 'react-awesome-reveal'


import { EffectCube, Pagination } from 'swiper/modules';
import { useLocation } from 'react-router-dom';


const Middle2 = ({ text, date,image,refence,okay }) => {
  const isMobile = window.innerWidth > 900;
  const isMobileh = window.innerHeight <= 900 && window.innerHeight >800;
  const isMobileh1 = window.innerHeight <= 800 && window.innerHeight >700;
  const isMobileh2 = window.innerHeight <= 700 && window.innerHeight >600;

  const handleupScroll = () => {
    // Scroll to the section
    refence.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (<>
    <div className=''>
      <div className='h-screen'>
        <div className='flex items-center justify-center'>
          <div>
            <div className={`font-semibold font1 text-4xl  ${isMobileh ? 'mt-16' :( isMobileh1 ? 'mt-16 mb-1' : (isMobileh2 ? 'mt-16' : 'my-16')) }`}>
              {date}
            </div>
          </div>
        </div>


        <div className={`flex items-center   ${isMobileh ? 'h-96' :( isMobileh1 ? 'h-72' : (isMobileh2 ? 'h-72' : 'h-96')) } ${isMobile ? 'mx-10' : 'mx-1'}`}>
          <div className={`text-center font2 font-medium  ${isMobileh ? 'text-2xl' :( isMobileh1 ? 'text-xl mt-0' : (isMobileh2 && !isMobile ? 'text-xl' : 'text-3xl')) } `} >
           {text}
            </div>

        </div>


        <div className='flex items-center justify-center'>
          <div className={` ${isMobileh ? 'mt-5' :( isMobileh1 ? 'mt-5' : (isMobileh2 ? 'mt-0' : 'mt-10')) }`}>
            <img src={image} alt="" style={{ height:isMobileh1 || isMobileh  ? 200 : (isMobileh2 ? 140 : 250), width: isMobileh || isMobileh1 ? 300 :(isMobileh2 ? 200 : 350), border: '3px solid black', borderRadius: 10 }} className='shadow-md' />
          </div>

        </div>
        {okay ? <FaArrowAltCircleUp className={` text-gray-50 drop-shadow-md ${isMobileh ? 'ml-auto mr-2 mt-2 text-6xl' :( isMobileh1 ? 'ml-auto mr-2 mt-2 text-6xl' : (isMobileh2 ? 'ml-auto mr-2 mt-2 text-5xl' : 'ml-auto mr-8 mt-2 text-6xl')) }`} onClick={handleupScroll}/> : ''}

      </div>
    </div>
  </>)
}





const Middle1 = () => {

  const isMobile = window.innerWidth > 900;
  const isMobileh = window.innerHeight <= 900 && window.innerHeight >800;
  const isMobileh1 = window.innerHeight <= 800 && window.innerHeight >700;
  const isMobileh2 = window.innerHeight <= 700 && window.innerHeight >600;

  const [data,setdata] =useState({})

  function myFunction() {
   localStorage.setItem('mode','a')
    // Add your functionality here
  }
  window.addEventListener('popstate', myFunction)
  
  useEffect(()=>{
    const mode = localStorage.getItem('mode')
  console.log(mode)

  if(mode == 'preview')
    {
      setdata(JSON.parse(sessionStorage.getItem('Formdata')))
    }
  else{
    const value = {
      firstname:'abc',
      secondname:'bcgd'
    }
    setdata(value)
  }
  },[])
  // if(mode == 'preview')
  //   {
  //      setdata(JSON.parse(sessionStorage.getItem('Formdata')))
  //   }
  // else if(mode == 'user')
  //   {

  //   }
  //   else{
  //     const value = {
  //       firstname:'abc',
  //       secondname:'efg'
        
  //     }
  //     setdata(value)
  //     console.log(data)
  //   }

  const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero accusamus vel minus dignissimos, suscipit nulla ea dolorem? Earum odit veniam fuga repellat aperiam unde? Aut error quis minima nisi qui.  "
  const date = "28/06/2004"


  const section = [useRef(null), useRef(null), useRef(null), useRef(null),]
  const upsection = useRef(null)

  const handleScroll = (n) => {
    // Scroll to the section
    console.log('n : ',n);
    section[n].current.scrollIntoView({ behavior: 'smooth' });
  };

  


  return (
    <>
      <div className="h-screen bg-gradient-to-tr from-lime-200 via-teal-100 via-green-100 to-emerald-200">
        <div className={`h-screen ${!isMobile ? 'bg-gradient-to-tr' : 'bg-gradient-to-br'} from-transparent via-transparent via-transparent to-lime-200 overflow-scroll`}>
          <div className='h-screen' ref={upsection}>
            <AttentionSeeker effect='bounce' triggerOnce={true}>

              <div className={`items-center text-center justify-center font mx-5 ${isMobileh ? 'mt-40 text-5xl mb-5' :( isMobileh1 ? 'mt-24 text-5xl mb-5' : (isMobileh2 ? 'mt-20 text-5xl mb-2' : 'mt-48 text-6xl mb-5')) } `}>
                Welcome to The Wedding of {data.firstname} And {data.secondname}
              </div>

            </AttentionSeeker>
            <div className={`item-center justify-center flex ${isMobileh ? 'mt-28' :( isMobileh1 ? 'mt-20' : (isMobileh2 ? 'mt-10' : 'mt-32')) }`}>
              <div className='block'>
                <div className='flex mb-6'>
                  <AttentionSeeker effect='tada' delay={800} triggerOnce={true}>

                    <div className='mx-3' onClick={() => { handleScroll(0); }}>
                      <img src={Haldi} alt="" style={{ height: isMobileh2 ? '140px' : '170px', width:isMobileh2 ? '140px' : '170px' , border: '4px solid  white', borderRadius: 20 }} className='shadow-md drop-shadow-lg' />
                    </div>

                  </AttentionSeeker>
                  <AttentionSeeker effect='tada' delay={1100} triggerOnce={true}>
                    <div className='mx-3' onClick={() => { handleScroll(1); }}>
                      <img src={Engagement} alt="" style={{ height: isMobileh2 ? '140px' : '170px', width:isMobileh2 ? '140px' : '170px', border: '4px solid  white', borderRadius: 20 }} className='shadow-md drop-shadow-lg' />
                    </div>
                  </AttentionSeeker>
                </div>
                <div className='flex my-6' >
                  <AttentionSeeker effect='tada' delay={1400} triggerOnce={true}>
                    <div className='mx-3' onClick={() => { handleScroll(2); }}>
                      <img src={Haldi} alt="" style={{ height: isMobileh2 ? '140px' : '170px', width:isMobileh2 ? '140px' : '170px', border: '4px solid  white', borderRadius: 20 }} className='shadow-md drop-shadow-lg' />
                    </div>
                  </AttentionSeeker>
                  <AttentionSeeker effect='tada' delay={1800} triggerOnce={true}>
                    <div className='mx-3' onClick={() => { handleScroll(3); }}>
                      <img src={Engagement} alt="" style={{ height: isMobileh2 ? '140px' : '170px', width:isMobileh2 ? '140px' : '170px', border: '4px solid  white', borderRadius: 20 }} className='shadow-md drop-shadow-lg' />
                    </div>
                  </AttentionSeeker>
                </div>
              </div>
            </div>
          </div>
          
          <div ref={section[0]}>  <Middle2 refence={upsection} text={text} date={date} image={Engage}/></div>
          <div ref={section[1]}>  <Middle2 refence={upsection} text={text} date={date} image={Engage}/></div>
          <div ref={section[2]}>  <Middle2 refence={upsection} text={text} date={date} image={Engage}/></div>
          <div ref={section[3]}>  <Middle2 refence={upsection} okay={true} text={text} date={date} image={Engage}/></div>

          <div className=''>

            <div className='text-center font-medium text-3xl font1 my-2'>
              Pre Wedding Pics
            </div>
            <Swiper
              effect={'cube'}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              modules={[EffectCube, Pagination]}

            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
            </Swiper>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default Middle1