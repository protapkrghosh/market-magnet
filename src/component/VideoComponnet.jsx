
import { video } from "../data/data";

const VideoComponent = () => {
  return (
    <div className="md:grid grid-cols-3 gap-2 mt-4 md:mt-0 ">
      {video.map((videos, index) => (
        <div className="p-4" key={index}>
          <p className="text-4xl text-[#f70942] my-4">{videos.icon}</p>
          <p className="my-2 text-xl text-black font-bold">{videos.heading}</p>
          <p className="text-slate-500">{videos.para}</p> 
        </div>
      ))}
    </div>
  );
};

export default VideoComponent;
