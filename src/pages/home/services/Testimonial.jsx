import { useRef } from 'react';
import { IoMdQuote } from 'react-icons/io';
import { MdChevronLeft } from 'react-icons/md';
import { GoChevronRight } from "react-icons/go";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
const Testimonial = () => {

      // Create a ref for the Swiper instance
  const swiperRef = useRef(null);

  // Custom function for navigating to the next slide
  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  // Custom function for navigating to the previous slide
  const goToPrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

    const testimonials = [
        {
          feedback:
            "Great service and good understanding of clients requirements &amp; Media Planning. I highly recommend outdooriyan Advertising.",
          pic: "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-b.jpg",
          name: "JOHN DOE",
          position: "CEO, lUX",
        },
        {
          feedback:
            "Experience  I found myself working in a true partnership that results in an extra incredible of us expertise. work in any domestic market",
          pic: "	https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-a.jpg",
          name: "JOHN DOE",
          position: "CEO, lUX",
        },
        {
          feedback:
            "Experience  I found myself working in a true partnership that results in an extra incredible of us expertise. work in any domestic market",
          pic: "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-a.jpg",
          name: "JOHN DOE",
          position: "CEO, lUX",
        },
        {
          feedback:
            "With a few details they will quickly present you with the best available billboard locations in the areas you are considering.",
          pic: "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-b.jpg",
          name: "JOHN DOE",
          position: "CEO, lUX",
        },
        {
          feedback:
            "Great service and good understanding of clients requirements &amp; Media Planning. I highly recommend outdooriyan Advertising.",
          pic: "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-b.jpg",
          name: "JOHN DOE",
          position: "CEO, lUX",
        },
        {
          feedback:
            "Great service and good understanding of clients requirements &amp; Media Planning. I highly recommend outdooriyan Advertising.",
          pic: "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-b.jpg",
          name: "JOHN DOE",
          position: "CEO, lUX",
        },
        {
          feedback:
            "Experience  I found myself working in a true partnership that results in an extra incredible of us expertise. work in any domestic market",
          pic: "	https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-a.jpg",
          name: "JOHN DOE",
          position: "CEO, lUX",
        },
      ];
    return (
        <div className="max-w-[1140px] mx-auto relative">
        <div className="flex items-center relative my-24">
          <IoMdQuote className="rotate-180 bg-[#F70942] h-24 lg:h-[280px] w-16 lg:w-[400px] lg:pl-24 text-white"></IoMdQuote>
          <h1 className="text-3xl lg:text-6xl font-bold absolute left-16 lg:left-72 lg:top-10">
            CLIENTS <br /> TESTIMONIAL
          </h1>
        </div>
        <Swiper
          slidesPerView={1}
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
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <p className="text-xl font-semibold">{testimonial.feedback}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.pic}
                  className="w-16 rounded-full"
                  alt={testimonial.name}
                />
                <div>
                  <h5>{testimonial.name}</h5>
                  <p className="text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="flex gap-5 mt-5 justify-end">
            <div
              className="custom-swiper-button-prev text-3xl border border-black transition-all hover:border-red-500 hover:text-red-500 cursor-pointer"
              onClick={goToPrevSlide}
            >
              <MdChevronLeft />
            </div>
            <div
              className="custom-swiper-button-next text-3xl border border-black transition-all hover:border-red-500 hover:text-red-500 cursor-pointer"
              onClick={goToNextSlide}
            >
              <GoChevronRight />
            </div>
          </div>
        </Swiper>
      </div>
    );
};

export default Testimonial;