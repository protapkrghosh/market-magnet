import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const AboutBanner = () => {
  return (
    <div className="bg-[url('https://outmedia.freekytheme.com/wp-content/uploads/2021/02/banner-page.jpg')] flex justify-center items-center bg-center bg-cover text-white min-h-[35em]">
      <div>
        <h1 className="text-5xl font-bold mb-4">About</h1>

        <div className="flex justify-center items-center">
          <Link to="/">Home</Link>
          <IoIosArrowForward className="text-xl mx-3" />
          <p>About</p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;