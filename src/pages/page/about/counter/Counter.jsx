import CountUp from 'react-countup';

const Counter = () => {
  return (
    <div className='w-[70%] mx-auto mb-32'>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 ">
        <div className='mt-4 '>
          <div className="count-down"><CountUp end={250} />K</div>
          <p className="">Brand Advertised​</p>
        </div>

        <div className='mt-4 '>
          <div className="count-down"><CountUp end={789} />K</div>
          <p className="">Screens Place</p>
        </div>

        <div className='mt-4 '>
          <div className="count-down"><CountUp end={149} />+</div>
          <p className="">Campaign Completed</p>
        </div>

        <div className='mt-4 '>
          <div className="count-down"><CountUp end={189} />K</div>
          <p className="">Happy Clients​</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;