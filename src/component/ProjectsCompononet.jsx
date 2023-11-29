const ProjectsComponent = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="md:flex justify-center relative">
        <div className="md:w-1/2 md:ml-28 relative group">
          <img src="https://outmedia.freekytheme.com/wp-content/uploads/2021/01/project-1.jpg" loading="lazy" alt="" className="w-full h-full" />
          <div className="absolute z-10 bottom-0 left-0 right-0 text-white bg-[#f70942] pt-[600px] m-7 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
            <h1 className="text-2xl font-bold ml-4 ">A vertical traditional</h1>
            <p className="ml-4 text-white mb-9">Digital Bilboard</p>
          </div>
        </div>
        <div className="md:w-1/2 md:flex flex-col ">
          <div className="md:w-full md:h-1/2 md:flex">
            <div className="md:w-1/2 md:h-full relative group">
              <img src="https://outmedia.freekytheme.com/wp-content/uploads/2021/01/project-3-1.jpg" loading="lazy" alt="" className="w-full h-full" />
              <div className="absolute z-10 bottom-0 left-0 right-0 text-white bg-[#f70942] pt-64 m-2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                <h1 className="text-2xl font-bold  ml-4">Digital <br /> Playlist</h1>
                <p className="ml-4 text-white mb-9">Project Mangement</p>
              </div>
            </div>
            <div className="md:w-1/2 md:h-full relative group">
              <img src="https://outmedia.freekytheme.com/wp-content/uploads/2020/11/project-6.jpg" loading="lazy" alt="" className="w-full h-full" />
              <div className="absolute z-10 bottom-0 left-0 right-0  text-white bg-[#f70942] pt-64 m-2 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                <h1 className="text-2xl font-bold ml-4 ">Research <br /> Highlighted</h1>
                <p className="ml-4 text-white mb-9">Hoarding place</p>
              </div>
            </div>
          </div>
          <div className="md:w-full md:h-1/2 relative group">
            <img src="https://outmedia.freekytheme.com/wp-content/uploads/2021/01/project-2-1.jpg" loading="lazy" alt="" className="w-full h-full" />
            <div className="absolute z-10 bottom-0 left-0 right-0 text-white bg-[#f70942] pt-64 m-7 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
              <h1 className="text-2xl font-bold  ml-4">Billboard Information</h1>
              <p className="ml-4 text-white mb-9">Mobile Bilboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
