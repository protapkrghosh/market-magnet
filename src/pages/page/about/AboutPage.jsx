import AboutBanner from "./about-banner/AboutBanner";
import Counter from "./counter/Counter";
import MediaAgency from "./media-agency/MediaAgency";
import Mission from "./mission/Mission";
import OurTeam from "./our-team/OurTeam";


const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <Mission />
      <Counter />
      <MediaAgency />
      <OurTeam />
    </div>
  );
};

export default AboutPage;
