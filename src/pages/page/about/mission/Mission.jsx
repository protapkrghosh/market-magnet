import React from 'react';
import image from "../../../../assets/julian.jpg"

const Mission = () => {
  return (
    <div className='w-[84%] mx-auto my-28'>
      <div className='flex flex-col md:flex-row items-center gap-10'>
        {/* Who we are */}
        <div className='w-full'>
          <div className='flex items-center'>
            <h3 className='text-3xl font-bold uppercase mr-4'>Who we are</h3>
            <div className='w-[30%] h-[2px] bg-[#FC0841]'></div>
          </div>

          <div className='text-[#828282] space-y-12 mt-5 mb-12'>
            <p>We are a value-driven organization. Our core values inspire us to push our boundaries and set benchmarks for others.</p>

            <p>Start building your brand equity with the strategic one. Creative has been focusing on project management & implementation through cooperation.</p>
          </div>

          {/* Mission and Core Values */}
          <div className='flex gap-3'>
            <div>
              <h3 className='text-xl font-bold uppercase'>Mission</h3>
              <p className='text-[#828282]'>Start building your brand with the strategic one. industry expertise to solutions that has been focusing on project & implementation through</p>
            </div>

            <div>
              <h3 className='text-xl font-bold uppercase'>Core Values</h3>
              <p className='text-[#828282]'>We are a value-driven organization. Our core values inspire us to push as been focusing on project & implementation through</p>
            </div>
          </div>
        </div>

        {/* Photo */}
        <div className='w-full'>
          <img src={image} alt="" className='w-full h-[35em]' />
        </div>
      </div>
    </div>
  );
};

export default Mission;
