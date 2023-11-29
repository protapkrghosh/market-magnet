import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGripLines, FaGripLinesVertical } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
    const navItem = (
        <>
            <li className="ml-4  flex items-center text-white"> <Link to={'/'}>HOME</Link></li>
            <li className="ml-4  flex items-center text-white"><Link to={'/coleges'}>PAGES</Link></li>
            <li className="ml-4  flex items-center text-white"><Link to={'/services'}>SERVICE</Link></li>
            <li className="ml-4 flex items-center text-white"><Link to={'/mycolge'}>NEWS</Link></li>
            <li className="ml-4 flex items-center text-white"><Link to={'/mycolge'}>CONTACT</Link></li>
        </>
    )
  return (
    <nav className="p-4 fixed z-10 w-full ">
      <div className="w-9/12 mx-auto flex items-center justify-between">
        <Link to={'/'}>
          <img src="https://outmedia.freekytheme.com/wp-content/uploads/2021/03/logo-1.png" className="h-10" loading="lazy" alt="" />
        </Link>

        <div className="hidden md:flex space-x-4">
          <ul className="flex items-center">
            {navItem}
          </ul>
        </div>


        <Link to={'/login'}>
          <button className="btn btn-primary ml-8">login</button>
        </Link>



        <div className="md:hidden">
          {isMobileMenuOpen ? (
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <FaGripLinesVertical className="h-6 w-6 fill-current" />
            </button>
          ) : (
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <FaGripLines className="h-6 w-6 fill-current" />
            </button>
          )}
        </div>
      </div>

      <div className={`w-9/12 mx-auto md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="mt-2 space-y-2">
          {navItem}
        </ul>
        {/* Close button for mobile menu */}
        <button onClick={toggleMobileMenu} className="mt-2 focus:outline-none"></button>
      </div>
    </nav>
  );
};

export default Navbar;
