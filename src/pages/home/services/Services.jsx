import Billboard from "./Billboard";
import Testimonial from "./Testimonial";
import Specification from "./Specification";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Company from "./Company";
import { billboards } from "../../../data/data";

const Services = () => {
  const billboard = billboards
  return (
    <div>
      <Banner></Banner>
      <Billboard billboards={billboard}></Billboard>
      <Specification></Specification>
      <Testimonial></Testimonial>
      <FAQ></FAQ>
      <Company></Company>
    </div>
  );
};

export default Services;
