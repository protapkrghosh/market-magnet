import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
    return (
        <div className="relative">
        <img
          src="https://outmedia.freekytheme.com/wp-content/uploads/2021/02/banner-page.jpg"
          alt=""
          className="w-full h-[400px] lg:h-auto"
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
    );
};

export default Banner;