

const Staretigy = () => {
    const imge = "https://i.ibb.co/PFJqynL/stretigy.jpg"
    const divStyle = {
        backgroundImage: `url(${imge})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        
    };
    return (
            <div className='relative w-full  bg-cover' style={divStyle}>
                <div className="absolute inset-0 bg-black opacity-10"></div>
           <div className='md:flex md:justify-center md:items-center '>
           <h1 className="text-right text-white text-7xl font-extrabold py-20">EXPERT OUT <br /> OF MEDIA <br /> AGENCY</h1>
            <div className='text-white bg-purple-950 bg-opacity-90  md:w-1/2 ml-10 '>
                <h1>March 20, 2023</h1>
                <h1>WHERE CAN I GET SOME?</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className='btn btn-outline border-0 border-b-4 text-white'>read more</button>
            </div>
           </div>
          
         </div>
    );
};

export default Staretigy;