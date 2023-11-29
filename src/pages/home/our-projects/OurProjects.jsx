import ProjectsCompononet from "../../../component/ProjectsCompononet";


const OurProjects = () => {
    const imge = "https://outmedia.freekytheme.com/wp-content/uploads/2023/08/bg-f.png"
    const imgeStyle = {
        backgroundImage: `url(${imge})`,
        backgroundRepeat: 'no-repeat',


    };
    return (
        <div className=' w-full relative md:flex md:justify-center md:items-center py-24 md:my-96  bg-cover ' style={imgeStyle}>

            <div className='text-center my-24'>
                <p className=" my-4 text-[#f70942] tex">WHAT WE DONE</p>
                <h1 className=" text-white text-7xl font-extrabold my-4">OUR PROJECTS.</h1>

            </div>
            <div className="absolute top-96 left-4">
                <ProjectsCompononet />
            </div>
        </div>
    );
};

export default OurProjects;