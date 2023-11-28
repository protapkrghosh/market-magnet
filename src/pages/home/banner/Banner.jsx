import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { banners } from '../../../data/data';

const Banner = () => {
    return (
        <div className=''>
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
                        <div className="hero relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#4a0072] to-slate-500 opacity-90"></div>
                            <img src={banner?.img} alt="" className="object-cover w-full h-screen" />
                            <div className="flex hero-content items-center w-9/12 mx-auto justify-start  absolute inset-0  text-white">
                                <div className="">
                                    {banner.title.split('\n').map((line, lineIndex) => (
                                        <h1 key={lineIndex} className=" text-5xl md:text-8xl font-bold">
                                            {line}
                                        </h1>
                                    ))}

                                    <button className=" btn-primary mt-7">Our Servises</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
