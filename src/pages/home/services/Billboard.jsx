const Billboard = ({billboards}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 max-w-[1140px] mx-auto my-24">
        {billboards.map((billboard) => (
          <div key={billboard.img} className="relative overflow-hidden">
            <img
              src={billboard.img}
              className="object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
              alt=""
            />
            <div className="absolute bg-white bottom-0 end-0 w-72 h-64 text-black p-8">
              <img src={billboard.logo} alt="" className="w-16 h-16 mb-5" />
              <h3 className="text-lg font-bold mb-5">{billboard.heading}</h3>
              <p className="text-gray-500 text-lg text-left">
                {billboard.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
};

export default Billboard;