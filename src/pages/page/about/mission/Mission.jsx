import React from 'react';
import image from "../../../../assets/julian.jpg"

const Mission = () => {
  return (
    <div className='w-[84%] mx-auto my-28'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Who we are */}
        <div>
          <div className=''>
            <h3 className='text-3xl font-bold uppercase'>Who we are</h3>
            <span className='h-2 bg-[#CA0538]'></span>
          </div>
        </div>

        {/* Photo */}
        <div>
          <img src={image} alt="" className='w-full h-[35em]' />
        </div>
      </div>
    </div>
  );
};

export default Mission;