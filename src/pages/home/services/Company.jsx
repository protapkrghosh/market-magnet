
const Company = () => {
    
  const companiesLogos = [
    "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-logo1.png",
    "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-logo2.png",
    "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-logo3.png",
    "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-logo4.png",
    "https://outmedia.freekytheme.com/wp-content/uploads/2020/11/client-logo5.png",
  ];
    return (
        <div className="grid grid-cols-5 max-w-[1140px] mx-auto my-24">
            {
                companiesLogos.map(companiesLogo => (
                    <img key={companiesLogo} src={companiesLogo} alt="" />
                ))
            }
        </div>
    );
};

export default Company;