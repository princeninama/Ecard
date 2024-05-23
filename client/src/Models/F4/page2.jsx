
import '../F3/styles.css'
import { useEffect, useState } from 'react'
import '../F3/animations/anime2.css'
import 'animate.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './style.css'

// import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { AttentionSeeker } from 'react-awesome-reveal'

const Page2 = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);


    return (

        <div className=" h-screen w-screen bg-gradient-to-r from-fuchsia-200 via-pink-100 via-white  via-rose-100 to-rose-50">
            <div className=' h-screen overflow-scroll scrollbar flex items-center justify-center'>
                <div className="pt-1">
                    <div className="mt-20 flex items-center justify-center">

                        <div className=' '>
                            <div>
                                <AttentionSeeker effect='jello' triggerOnce={true}><img src={data.images[currentIndex]} alt="" style={{ height: 300, width: 450 }} className=' rounded-md shadow-md border-2 border-neutral-600' /> </AttentionSeeker>
                            </div>
                            <div className='h-24 flex items-center justify-center font1 font-semibold text-5xl my-16 text-gradient bg-clip-text'>
                                {data.firstname} <div className='font1'>&#160; &#38; &#160;</div> {data.secondname}
                            </div>
                        </div>

                    </div>
                </div>
              
            </div>

        </div>
    )
}

export default Page2