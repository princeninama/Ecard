// import image from '../../assets/Navratri.avif'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image5.jpg'
import '../F3/styles.css'
import { useEffect, useState } from 'react'
import '../F3/animations/anime2.css'
import 'animate.css'
import ring from './images/2.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaLongArrowAltRight } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './style.css'

import { Navigation } from 'swiper/modules';
import { AttentionSeeker } from 'react-awesome-reveal'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './Page3'

const Middle = () => {

    const data = {
        firstname: 'Rahul',
        secondname: 'Rashmika',
        images: [image1, image2, image3, image4],
        // dates: ['06/02/2024', '06/02/2024', '06/02/2024', '06/02/2024',],
        // eventname: ['Haldi', 'Mehndi', 'Dj Night', 'Wedding'],
        // eventdescription: ['In the joyous chaos of the Haldi ceremony, traditions meet celebrations, painting a picture of love.',
        //     'Henna-tinted hands, laughter, and music—Mehndi night is a celebration of vibrant traditions and joyful beginnings.',
        //     'Feel the rhythm, embrace the night—DJ night is where magic happens on the dance floor.',
        //     'In the vibrant celebration of an wedding, love and tradition create an unforgettable tapestry of joy.'
        // ],
        event: [['06/02/2024', 'Haldi', 'In the joyous chaos of the Haldi ceremony, traditions meet celebrations, painting a picture of love.',],
        ['07/02/2024', 'Mehndi', 'Henna-tinted hands, laughter, and music—Mehndi night is a celebration of vibrant traditions and joyful beginnings.',],
        ['08/02/2024', 'Dj Night', 'Feel the rhythm, embrace the night—DJ night is where magic happens on the dance floor.',],
        ['08/02/2024', 'Wedding', 'In the vibrant celebration of an wedding, love and tradition create an unforgettable tapestry of joy.']
        ]
    }



    return (
        <div className='h-screen w-screen'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">



                <SwiperSlide>

                    <Page1 />

                </SwiperSlide>

                <SwiperSlide>

                    <Page2 data={data} />

                </SwiperSlide>
                <SwiperSlide>

                    <Page3 data={data} />

                </SwiperSlide>



            </Swiper>
        </div>
    )
}


export default Middle