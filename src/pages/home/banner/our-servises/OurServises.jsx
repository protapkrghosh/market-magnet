import { homebillboards } from "../../../../data/data";
import Billboard from "../../services/Billboard";


const OurServises = () => {
    const homeBilbord = homebillboards
    return (
        <div className="md:mt-56">
            <div className="text-center my-14">
            <p className="text-[#f70942] text-xs font-semibold">WHAT WE DO</p>
            <h1 className="text-5xl font-bold">OUR SERVICES .</h1>
            </div>
            <div>
            <Billboard billboards={homeBilbord}/>
            </div>
        </div>
    );
};

export default OurServises;