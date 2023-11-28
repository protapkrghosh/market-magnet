import { SlLayers } from "react-icons/sl";
import { GoStar } from "react-icons/go";
import { PiBuildingsBold } from "react-icons/pi";
import { PiVan } from "react-icons/pi";
import { RiFlag2Line } from "react-icons/ri";
import { GiRotaryPhone } from "react-icons/gi";
import { RxDividerVertical } from "react-icons/rx";

const Specification = () => {
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
    
    return (
        <div className="bg-black py-24 text-white ">
        <h3 className="text-[#F70942] font-bold tracking-tighter text-center">
          OUR SPECIFICATION
        </h3>
        <h1 className="font-bold text-6xl tracking-tighter text-white text-center mt-4 mb-24">
          WHY CHOOSE US.
        </h1>
        <div className="grid grid-cols-3 gap-x-10 gap-y-14 max-w-[1140px] mx-auto">
          {specifications.map((specification) => (
            <div key={specification.logo}>
              <span className="flex items-center text-5xl">
                <RxDividerVertical className="text-[#F70942]"></RxDividerVertical>
                <specification.logo className="text-4xl"></specification.logo>
                <RxDividerVertical className="text-[#F70942]"></RxDividerVertical>
              </span>
              <h4 className="font-bold my-3">{specification.heading}</h4>
              <p>{specification.para}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Specification;