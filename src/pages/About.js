import React from "react";
import Gouls from "../components/about/gouls/Gouls";
import KnowUs from "../components/about/kmowus/KnowUs";
import Msgs from "../components/about/msgs/Msgs";
import TitleSection from "../components/about/TitleSection/TitleSection";

const About = () => {
  return (
    <div>
      <TitleSection title="About" />
      <KnowUs />
      <Gouls />
      <Msgs />
    </div>
  );
};

export default About;
