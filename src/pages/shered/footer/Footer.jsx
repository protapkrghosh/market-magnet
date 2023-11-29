import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-black text-[#C1C1C1]">
      <div className="max-w-[1140px] mx-auto py-5 lg:py-20">
      <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center mb-24  text-center lg:text-left">
        <p className="text-3xl lg:text-6xl font-bold text-white mb-7 lg:mb-0">
          WANT TO <br />
          WORK WITH <br />
          US?
        </p>
        <p className="border border-[#F70942] w-80 hidden lg:flex"></p>
        <div>
          <h5 className="text-lg font-semibold tracking-tighter text-white mb-2 lg:mb-7">CONTACT US</h5>
          <p>(+68) 120034509</p>
          <p>info@yourdomain.com</p>
          <p>
            005 Stokes Isle Apt. 896,
            <br />
            enaville 10010, USA
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row text-center lg:text-left justify-between">
        <div>
          <img
            src="https://outmedia.freekytheme.com/wp-content/uploads/2021/03/logo-1.png"
            alt=""
            className="max-w-[160px] mb-3 lg:mb-10 mx-auto lg:mx-0"
          />
          <p>© Copyrights 2023 Outmedia <br /> All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-y-1">
          <h5 className="text-lg font-semibold tracking-tighter text-white mt-4 lg:mt-0 lg:mb-5">USEFUL LINKS</h5>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Services</Link>
          <Link>News</Link>
          <Link>Contact</Link>
        </div>
        <div className="flex flex-col gap-y-1">
          <h5 className="text-lg font-semibold tracking-tighter text-white mt-4 lg:mt-0 lg:mb-5">LEGAL</h5>
          <Link>Terms & Conditions</Link>
          <Link>Privacy Policy</Link>
          <Link>Terms of Sales</Link>
          <Link>Whitepaper</Link>
        </div>
        <div className="flex flex-col">
          <h5 className="text-lg font-semibold tracking-tighter text-white mt-4 lg:mt-0 lg:mb-5">SUBSCRIBE</h5>
          <div className="relative h-10 w-60 lg:w-full mx-auto my-4 lg:my-8">
            <input
              className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-white focus:border-2 focus:border-white focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "
              type="email"
              name="email"
            />
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t-0 before:border-l-0 before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-white peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-white peer-focus:before:border-t-0 peer-focus:before:border-l-0 peer-focus:before:border-white peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-white peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 ">
            <span>Email</span>
            </label>
          </div>
          <div className="flex justify-center lg:justify-normal gap-3">
              <FaFacebookF></FaFacebookF>
              <FaTwitter></FaTwitter>
              <FaInstagram></FaInstagram>
              <FaLinkedin></FaLinkedin>
          </div>
        </div>
      </div>
        <p className="text-center mt-32">© 2023, OUTMEDIA. All rights reserved</p>
    </div>
    </div>
  );
};

export default Footer;
