const Billboard = () => {
    const billboards = [
        {
          img: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/service-05.jpg",
          logo: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/hot-dog.png",
          heading: "TRANSIT MEDIA",
          para: "Transit Media advertising has grown as technology to reach market.",
        },
        {
          img: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/service-02.jpg",
          logo: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/signboard.png",
          heading: "BUS SHELTER",
          para: "Bus Shelter advertising has grown as technology to reach market.",
        },
        {
          img: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/service-01.jpg",
          logo: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/shop.png",
          heading: "DIGITAL DISPLAYS",
          para: "Digital Displays advertising has grown as technology to reach market.",
        },
        {
          img: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/service-03.jpg",
          logo: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/billboard.png",
          heading: "MOBILE BILLBOARD",
          para: "Mobile billboard advertising has grown as technology to reach market.",
        },
        {
          img: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/service-06.jpg",
          logo: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/building.png",
          heading: "HOARDING",
          para: "Hoarding billboard advertising has grown as technology to reach market.",
        },
        {
          img: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/service-04.jpg",
          logo: "https://outmedia.freekytheme.com/wp-content/uploads/2020/12/factory.png",
          heading: "METRO ADS",
          para: "Metro billboard advertising has grown as technology to reach market.",
        },
      ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1140px] mx-auto my-24">
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