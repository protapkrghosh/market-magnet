import { Outlet } from "react-router";
import Navbar from "../pages/shered/navbar/Navbar";
import Footer from "../pages/shered/footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;