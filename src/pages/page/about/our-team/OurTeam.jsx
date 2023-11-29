import React from 'react';
import { Link } from 'react-router-dom';

const OurTeam = () => {
  return (
    <div className="bg-[url('https://outmedia.freekytheme.com/wp-content/uploads/2021/03/team-bg.jpg')] bg-center bg-cover pt-28 pb-52">
      <div className='text-center'>
        <h4 className='text-[#ED0841] font-medium uppercase'>Meet our expert team</h4>

        <div className='flex justify-center items-end group mt-3 mb-16'>
          <h2 className='text-white text-6xl font-extrabold uppercase'>Our Team</h2>
          <span className='h-3 w-3 rounded-full bg-[#ED0841] mb-1 group-hover:bg-[#000000] duration-500'></span>
        </div>
      </div>

      {/* Team members */}
      <div className='px-10 md:px-20 lg:px-28'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
          {/* Card 1 */}
          <div className='relative group mb-28 lg:mb-0'>
            <div>
              <img src="https://outmedia.freekytheme.com/wp-content/uploads/2020/09/team-01.jpg" alt="Image"/>
            </div>

            <div className='text-white text-center group-hover:bg-[#ED0841] py-10 absolute group-hover:-mt-14 left-[8%] duration-500 w-[85%]'>
              <Link className='text-[18px] uppercase'>Jhon Foster</Link>
              <p className='text-[14px]'>CEO, OOH Media</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className='relative group mb-28 lg:mb-0'>
            <div>
              <img src="https://outmedia.freekytheme.com/wp-content/uploads/2020/09/team-02.jpg" alt="Image"/>
            </div>

            <div className='text-white text-center group-hover:bg-[#ED0841] py-10 absolute group-hover:-mt-14 left-[8%] duration-500 w-[85%]'>
              <Link className='text-[18px] uppercase'>Matt Kelchner</Link>
              <p className='text-[14px]'>Director of Insights</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className='relative group'>
            <div>
              <img src="https://outmedia.freekytheme.com/wp-content/uploads/2020/09/team-03.jpg" alt="Image"/>
            </div>

            <div className='text-white text-center group-hover:bg-[#ED0841] py-10 absolute group-hover:-mt-14 left-[8%] duration-500 w-[85%]'>
              <Link className='text-[18px] uppercase'>Mathew Fogg</Link>
              <p className='text-[14px]'>Media Cordinator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
