import { news } from "../../../data/data";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { FaBookmark } from "react-icons/fa";
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
                                className="h-96 w-full object-cover z-10 transform transition-transform scale-100 hover:scale-105"
                            />

                          
                            <div className="absolute top-2 mx-1 p-4">
                                
                                    <div className="bg-[#f70942] text-white text-center w-[50%]">
                                    <p className="text-3xl">{newse.date}</p>
                                    <p>{newse.monthe}</p>
                                    </div>
                                    <p className="flex items-center text-white gap-2 uppercase text-sm my-4"><FaBookmark className=""/>{newse.category}</p>
                                    <h1 className="text-2xl font-bold  text-white">{newse.heading}</h1>
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
