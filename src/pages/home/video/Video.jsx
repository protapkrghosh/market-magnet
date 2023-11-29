import { FaPlay } from "react-icons/fa";
import VideoComponnet from "../../../component/VideoComponnet";
const Video = () => {

  return (
    <div className="md:w-9/12 mx-auto my-24 relative ">
      <div className="md:flex items-center  ml-4 md:ml-0 ">
        <img src="https://outmedia.freekytheme.com/wp-content/uploads/2021/03/image-a.jpg" className="md:w-[600px] md:h-[500px]" loading="lazy" alt="" />
        <h1 className="text-3xl lg:text-7xl font-extrabold absolute  md:right-44 md:top-10">
          OUTDOOR <br /> ADVERTISING <br />SOLUTION
          <div className="md:flex items-center">
            <hr className="bg-[#f70942] h-1 w-52 mt-6" /> <p className="text-xs text-slate-500 mt-6 md:ml-4">We are a value-driven organization. <br /> Our core values inspire us to push our boundaries.</p>
          </div>
        </h1>
        <div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button className="absolute md:right-96 md:bottom-72 btn-play mt-52 md:mt-7" onClick={() => document.getElementById('my_modal_3').showModal()}><FaPlay /></button>
          <dialog id="my_modal_3" className="modal w-full">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/VCPGMjCW0is?si=2ZHXdv90dFVS8ghY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </dialog>
        </div>
      </div>
      <div className="mt-80 md:mt-7">
        <VideoComponnet />
      </div>
    </div>
  );
};

export default Video;