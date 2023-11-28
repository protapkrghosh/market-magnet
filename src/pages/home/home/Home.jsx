import LazyLoad from "react-lazy-load";
import { Suspense, lazy } from "react";
const OurTeam = lazy(() => import("../our-team/OurTeam"));
const FaAskedQuiestions = lazy(() => import("../faq/FaAskedQuiestions"));
const News = lazy(() => import("../news/News"));
const ContactInformation = lazy(() => import("../contact-information/ContactInformation"));
const Advertisment = lazy(() => import("../advertisment/Advertisment"));
const Banner = lazy(() => import("../banner/Banner"));
const Contact = lazy(() => import("../contact/Contact"));
const OurProjects = lazy(() => import("../our-projects/OurProjects"));
const Servises = lazy(() => import("../services/Services"));
const Staretigy = lazy(() => import("../stretigy/Staretigy"));
const Testimonial = lazy(() => import("../testimonial/Testimonial"));
const Video = lazy(() => import("../video/Video"));
const WhoWeAre = lazy(() => import("../who-we-are/WhoWeAre"));
const Home = () => {
    return (
        <>
            <LazyLoad height={200}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Banner />
                    <WhoWeAre />
                    <Servises />
                    <Staretigy />
                    <Advertisment />
                    <Contact />
                    <Video />
                    <OurProjects />
                    <Testimonial />
                    <OurTeam />
                    <FaAskedQuiestions />
                    <News />
                    <ContactInformation />
                </Suspense>
            </LazyLoad>
        </>
    );
};

export default Home;