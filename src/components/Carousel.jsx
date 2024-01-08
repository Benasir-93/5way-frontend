import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
// import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './carousel.css';

// import required modules
import { Pagination,Autoplay,Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <div className='container-fluid shadow-lg'>
      <Swiper
        // effect={'flip'}
        // grabCursor={true}
        spaceBetween={30}
        centeredSlides={true}
        pagination={true}
        navigation={true}
        modules={[ Pagination,Autoplay,Navigation ]}
        className="mySwiper"
        autoplay={{
            delay: 2000, // Adjust the delay in milliseconds (5 seconds in this example)
            disableOnInteraction: false, // Autoplay will not be disabled after user interactions (swipes)
          }}
      >
         <SwiperSlide>
          <img src="./ec banner.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./ban web.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./dm banner.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./rl banner.jpg" />
        </SwiperSlide>
   
      </Swiper>
    </div>
  );
}
