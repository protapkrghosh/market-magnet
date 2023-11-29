import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Staretigy = () => {
  const mediaImage = "https://itsyuj.com/wp-content/uploads/2021/04/about-img.jpg"
  const progressImage = "https://outmedia.freekytheme.com/wp-content/uploads/2021/03/bg-prgress.jpg"

  const mediaBg = {
    backgroundImage: `url(${mediaImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "750px",
    backgroundPosition: "bottom",
  };

  const progressBg = {
    backgroundImage: `url(${progressImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: "cover",
    backgroundPosition: "top",
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      {/* Media content */}
      <div style={mediaBg}>
        <div className="bg-[#1d1c1c4b] bg-opacity-60 w-full h-full py-20">
          <div className="mr-10 md:mr-16 lg:mr-20">
            <p className='text-6xl font-extrabold text-white text-end uppercase'>Expert out <br /> of media <br /> agency</p>
          </div>
        </div>
      </div>

      {/* Progress content */}
      <div className='pt-16 pb-32' style={progressBg}>
        <div className='w-[80%] md:w-[60%] mx-auto'>
          <div>
            <p className='text-[25px] font-semibold text-white mb-10'>Providing expert assistance with <br /> billboard advertising for 25 years. <br /> quickly present you</p>
          </div>

          {/* Progress Bar */}
          <div className='text-white space-y-8'>
            <div>
              <p className='text-[15px] mb-3'>Strategy</p>
              <ProgressBar
                completed={90}
                bgColor="#CA0538"
                height='6px'
                labelSize="8px"
                animateOnRender="true"
                transitionDuration="3s"
              />
            </div>

            <div>
              <p className='text-[15px] mb-3'>Performance</p>
              <ProgressBar
                completed={75}
                bgColor="#CA0538"
                height='6px'
                labelSize="8px"
                animateOnRender="true"
                transitionDuration="3s"
              />
            </div>

            <div>
              <p className='text-[15px] mb-3'>Planning</p>
              <ProgressBar
                completed={80}
                bgColor="#CA0538"
                height='6px'
                labelSize="8px"
                animateOnRender="true"
                transitionDuration="3s"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staretigy;