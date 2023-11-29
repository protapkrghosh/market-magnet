import LazyLoad from "react-lazy-load";
import { Suspense, lazy } from "react";
import OurServises from "../banner/our-servises/OurServises";
import Testimonials from "../testimonial/Testimonials";
import OurTeam from "../../page/about/our-team/OurTeam";
import Advertishment from "../advertisment/Advertishment";
const FaAskedQuiestions = lazy(() => import("../faq/FaAskedQuiestions"));
const News = lazy(() => import("../news/News"));
// const ContactInformation = lazy(() => import("../contact-information/ContactInformation"));
const Banner = lazy(() => import("../banner/Banner"));
const Contact = lazy(() => import("../contact/Contact"));
const OurProjects = lazy(() => import("../our-projects/OurProjects"));

const Staretigy = lazy(() => import("../stretigy/Staretigy"));

const Video = lazy(() => import("../video/Video"));
const Home = () => {
    return (
        <div>
            
                <Suspense fallback={<div>Loading...</div>}>
                    <Banner />  
                    <OurServises />                    
                    <Staretigy />
                    <Advertishment></Advertishment>
                    <Contact />
                    <Video />
                    <OurProjects />
                    <Testimonials />
                    <OurTeam />
                    <FaAskedQuiestions />
                    <News />
                    {/* <ContactInformation /> */}
                </Suspense>
        </div>
    );
};

export default Home;