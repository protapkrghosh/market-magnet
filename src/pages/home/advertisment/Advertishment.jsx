import { FaCheck,FaToriiGate ,FaHome   } from "react-icons/fa";

const Advertishment = () => {
    return (
        <div>

            <h1 className="text-3xl text-center font-bold my-20 text-black"><span className="text-[#f70942]">OUTDOOR ADVERTISING</span> IS CONTINUOUSLY <br /> CHANGING WITH THE MODERN WORLD AND NOW</h1>


            <div className="md:flex w-full justify-center items-center ">
                <div className="md:w-[50%] ">
                    <img src="https://i.ibb.co/cy78vMg/images.jpg" className="h-max w-full " />
                </div>
                <div className="md:w-[50%] md:ml-14 ml-4">
                    <h1 className="text-2xl font-bold">Billboard advertising creates an <br /> instant impression and has <br /> excellent recall rates</h1>
                    <p className="py-6 text-slate-500">We work in any domestic market,<br /> and internationally. With a few details we will quickly present you with the best <br /> available billboard locations in the areas.</p>
                   <div className="flex gap-20 ml-10 items-center">
                   <p className="mt-4 font-bold"><FaToriiGate className="mx-auto text-4xl text-[#f70942]"/> Tradional</p>
                   <p className="font-bold">Transit Media</p>
                   <p className="mt-4 font-bold"><FaHome  className="mx-auto text-4xl text-[#f70942]"/> Highway</p>
                   </div>
                </div>
            </div>
            <div className=" md:flex w-full mt-8 items-center justify-center">
                <div className="md:[40%] md:ml-36 ml-4">
                    <h1 className="text-2xl font-bold">Outdoor advertising is <br /> continuously changing with the <br /> modern world</h1>
                    <p className="py-6 text-slate-500">Through our service you have access to the ENTIRE <br /> billboard inventory available in the areas you are looking to advertise in.</p>
                    <p className="flex items-center gap-2 "><FaCheck  className="text-[#f70942]" />Best available billboard locations in the areas</p>
                    <p className="flex items-center gap-2"><FaCheck  className="text-[#f70942]" />Simplify your billboard advertising</p>
                    <p className="flex items-center gap-2"><FaCheck  className="text-[#f70942]"  />
                        Find the right billboard advertising locations</p>
                   
                </div>
                <div className="md:w-[60%]">
                    <img src="https://i.ibb.co/4W4s4fr/images-1.jpg" className="h-full w-full" />
                </div>
            </div>
        </div>
    );
};

export default Advertishment;