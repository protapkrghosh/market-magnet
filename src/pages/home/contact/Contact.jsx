

const Contact = () => {
    const imge = "https://i.ibb.co/nzTcx4d/images-2.jpg"
    const imgeStyle = {
        backgroundImage: `url(${imge})`,
        backgroundRepeat: 'no-repeat',


    };
    return (
        <div className=' w-full md:flex md:justify-center md:items-center  bg-cover py-24 my-10' style={imgeStyle}>

            <div className='text-center my-24'>
                <h1 className=" text-white text-4xl font-extrabold my-4">HAVE ANY CONFUSTION?</h1>
                <p className="text-white my-4">Contact us to see how we can get you noticed</p>
                <button className="btn-primary"> CONTACT US</button>
            </div>

        </div>
    );
};

export default Contact;