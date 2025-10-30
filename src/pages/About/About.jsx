import React from "react";
import AboutHero from "../../aboutpages/about-hero";
import MV from "../../aboutpages/MV";
import Journey from "../../aboutpages/Ourjourny";
import Values from "../../aboutpages/Ourvalues";
import WhatWeOffer from "../../components/WhatWeOffer";
import ReadyToStart from "../../aboutpages/ReadyToStart";
import ScrollToTop from "../../components/ScrollToTop"; // ✅ Import here

const About = () => {
  return (
    <>
      <ScrollToTop />  {/* ✅ Scrolls to top on route change */}
      <AboutHero />
      <MV />
      <Journey />
      <Values />
      <WhatWeOffer />
      <ReadyToStart/>
    </>
  );
};

export default About;
