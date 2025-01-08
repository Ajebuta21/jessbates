import React from "react";
import SectionOne from "../components/homeComponents/SectionOne";
import SectionTwo from "../components/homeComponents/SectionTwo";
import SectionThree from "../components/homeComponents/SectionThree";
import SectionFour from "../components/homeComponents/SectionFour";
import SectionFive from "../components/homeComponents/SectionFive";

const Home = () => {
  return (
    <div className="w-full flex flex-col">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
};

export default Home;
