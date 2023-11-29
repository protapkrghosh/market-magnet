import { news } from "../../../data/data";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const News = () => {
    return (
        <div className="w-9/12 mx-auto my-11">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                {news.map((newse, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative ">
                            <img
                                src={newse.imge}
                                alt=""
                                loading="lazy"
                                className="h-96 w-full object-cover transform transition-transform hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-black opacity-40"></div>
                            <div className="absolute top-2 left-2 z-10">
                                <h1 className="">{newse.heading}</h1>

                                <button className="btn-news">read more</button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default News;
