import { SlLayers } from "react-icons/sl";
import { GoStar } from "react-icons/go";
import { PiBuildingsBold } from "react-icons/pi";
import { PiVan } from "react-icons/pi";
import { RiFlag2Line } from "react-icons/ri";
import { GiRotaryPhone } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";
import { IoMdQuote } from "react-icons/io";
import { MdChevronLeft } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import AccordionItem from "./AccordionItem";

const Services = () => {
  const billboards = [
    {
      img: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/service-05.jpg",
      logo: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/hot-dog.png",
      heading: "TRANSIT MEDIA",
      para: "Transit Media advertising has grown as technology to reach market.",
    },
    {
      img: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/service-02.jpg",
      logo: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/signboard.png",
      heading: "BUS SHELTER",
      para: "Bus Shelter advertising has grown as technology to reach market.",
    },
    {
      img: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/service-01.jpg",
      logo: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/shop.png",
      heading: "DIGITAL DISPLAYS",
      para: "Digital Displays advertising has grown as technology to reach market.",
    },
    {
      img: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/service-03.jpg",
      logo: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/billboard.png",
      heading: "MOBILE BILLBOARD",
      para: "Mobile billboard advertising has grown as technology to reach market.",
    },
    {
      img: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/service-06.jpg",
      logo: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/building.png",
      heading: "HOARDING",
      para: "Hoarding billboard advertising has grown as technology to reach market.",
    },
    {
      img: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/service-04.jpg",
      logo: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/factory.png",
      heading: "METRO ADS",
      para: "Metro billboard advertising has grown as technology to reach market.",
    },
  ];
  const specifications = [
    {
      logo: SlLayers,
      heading: "MULTI FORMAT MEDIA",
      para: "Billboards capture repeat exposure business message more effectively than almost .",
    },
    {
      logo: GoStar,
      heading: "SMARTLY PLANNED",
      para: "Start building your brand with the strategic one. an industry that your brand with y expertise to solutions.",
    },
    {
      logo: PiBuildingsBold,
      heading: "BUILD BRANDS",
      para: "A business is only as good as its strategic process, and that’s what contributes to expectations",
    },
    {
      logo: PiVan,
      heading: "TRANSPORT MEDIA",
      para: "Billboards capture repeat exposure business message more effectively than almost.",
    },
    {
      logo: RiFlag2Line,
      heading: "PLACED IN HIGH AREA",
      para: "Start building your brand with the strategic one. an industry that your brand with the strategic.",
    },
    {
      logo: GiRotaryPhone,
      heading: "24/7 SUPPORT",
      para: "A business is only as good as its strategic process, and that’s what contributes to expectations.",
    },
  ];
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
  const companiesLogo = [
    "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-logo1.png",
    "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-logo2.png",
    "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-logo3.png",
    "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-logo4.png",
    "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-logo5.png",
  ];

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
  return (
    <div>
      <div className="relative">
        <img
          src="https://outmedia.freekytheme.com/wp-content/uploads/2021/02/banner-page.jpg"
          alt=""
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">What we provide for you</h1>
            <div className="flex justify-center items-center gap-3">
              <p className="mb-2">Home</p>
              <IoIosArrowForward></IoIosArrowForward>
              <p>Services</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 max-w-[1140px] mx-auto my-24">
        {billboards.map((billboard) => (
          <div key={billboard.img} className="relative overflow-hidden">
            <img
              src={billboard.img}
              className="object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
              alt=""
            />
            <div className="absolute bg-white bottom-0 end-0 w-72 h-64 text-black p-8">
              <img src={billboard.logo} alt="" className="w-16 h-16 mb-5" />
              <h3 className="text-lg font-bold mb-5">{billboard.heading}</h3>
              <p className="text-gray-500 text-lg text-left">
                {billboard.para}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-black py-24 text-white ">
        <h3 className="text-[#F70942] font-bold tracking-tighter text-center">
          OUR SPECIFICATION
        </h3>
        <h1 className="font-bold text-6xl tracking-tighter text-white text-center mt-4 mb-24">
          WHY CHOOSE US.
        </h1>
        <div className="grid grid-cols-3 gap-5 max-w-[1140px] mx-auto">
          {specifications.map((specification) => (
            <div key={specification.logo}>
              <span className="flex items-center text-5xl">
                <RxDividerVertical className="text-[#F70942]"></RxDividerVertical>
                <specification.logo className="text-4xl"></specification.logo>
                <RxDividerVertical className="text-[#F70942]"></RxDividerVertical>
              </span>
              <h4>{specification.heading}</h4>
              <p>{specification.para}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto relative">
        <div className="flex relative my-24">
          <IoMdQuote className="rotate-180 bg-[#F70942] h-[280px] w-[400px] pl-24 text-white"></IoMdQuote>
          <h1 className="text-6xl font-bold absolute left-72 top-10">
            CLIENTS <br /> TESTIMONIAL
          </h1>
        </div>
        <Swiper
          slidesPerView={3}
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
      <div className="flex justify-between items-center gap-8 max-w-[1140px] mx-auto">
      <div className="w-1/2">
          <h4>FAQS</h4>
          <h1>MOST ASKED QUESTIONS</h1>
          <div>
            <AccordionItem
              id="collapseOne"
              title="Accordion Item #1"
              content="This is the first accordion body."
            />
            <AccordionItem
              id="collapseTwo"
              title="Accordion Item #2"
              content="This is the second accordion body."
            />
            <AccordionItem
              id="collapseThree"
              title="Accordion Item #3"
              content="This is the third accordion body."
            />
          </div>
      </div>
      <div className="w-1/2">
        <h3>REACH OUT VIA THE FROM BELOW</h3>
        <form action="">
        <input type="text" placeholder="Type here" className="input w-full" />
        <input type="text" placeholder="Type here" className="input w-full" />
        <input type="text" placeholder="Type here" className="input w-full" />
        <input type="text" placeholder="Type here" className="input w-full" />
        <button className="btn btn-outline">Default</button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Services;
