import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Company = () => {
  const companiesLogos = [
    "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-logo1.png",
    "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-logo2.png",
    "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-logo3.png",
    "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-logo4.png",
    "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-logo5.png",
  ];
  return (
    <div className="max-w-[1140px] mx-auto my-24">
      <Swiper
          breakpoints={{
            // when window width is >= 768px
            768: {
              slidesPerView: 1,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={50}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".custom-swiper-button-prev",
            nextEl: ".custom-swiper-button-next",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper my-24"
        >
          {companiesLogos.map((companiesLogo) => (
            <SwiperSlide key={companiesLogo}>
              <img src={companiesLogo} className=" mx-auto" alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default Company;
