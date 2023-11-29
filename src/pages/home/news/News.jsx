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
                        <img src={newse.imge} alt="" />
                        <h1>{newse.heading}</h1>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default News;
