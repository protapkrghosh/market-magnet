
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { banners } from '../../../data/data';
import WhoWeAre from '../who-we-are/WhoWeAre';

const Banner = () => {
    return (
        <div className='relative'>
             <div className='absolute -bottom-56 w-full z-10 hidden md:block'>
                <WhoWeAre />
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4a0072] to-slate-500 opacity-90"></div>
                            <img src={banner?.img} alt="" className="object-cover w-full md:h-[1000px] h-screen" />
                            <div className="flex hero-content items-center md:w-9/12 mx-auto  justify-start absolute inset-0 text-white">
                                <div className="">
                                    {banner.title.split('\n').map((line, lineIndex) => (
                                        <h1 key={lineIndex} className="text-5xl md:text-7xl font-extrabold uppercase">
                                            {line}
                                        </h1>
                                    ))}

                                    <button className="btn-primary mt-7">Our Services</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='md:hidden'>
                <WhoWeAre />
            </div>
        </div>
    );
};

export default Banner;
