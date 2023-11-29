import CountUp from 'react-countup';


const WhoWeAre = () => {
    return (
        <div className="md:w-9/12 md:mx-auto bg-white md:py-20 md:px-20  border-b-2 ml-4 my-14 ">
            <div className="  md:flex items-center justify-center gap-4">
                <div className="md:w-[50%]">
                    <h1 className="md:text-4xl text-2xl text-black md:font-extrabold  font-bold">WE CREATE MASS <br /> PUBLICS EYE <br /> <span className="text-[#f70942]">ATTENTION</span></h1>
                    <button className="btn btn-secendary mt-4">WHO WE ARE</button>
                </div>
                <div className="md:w-[50%] my-4">
                    <p className="text-slate-500 ">We are a value-driven organization. Our core values inspire us to push our boundaries and set benchmarks for others push our boundaries.</p>
                    <div className="md:grid grid-cols-3 gap-10 ">
                        <div className='mt-4 '>
                            <div className="count-down"><CountUp end={250} />+</div>
                            <p className="">Screens Place</p>
                        </div>
                        <div className='mt-4 '>
                            <div className="count-down"><CountUp end={78} />k</div>
                            <p className="">Peoples Reached</p>
                        </div>
                        <div className='mt-4 '>
                            <div className="count-down"><CountUp end={49} />+</div>
                            <p className="">Country Cover</p>
                        </div>
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
