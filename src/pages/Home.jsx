import React, { useEffect } from "react";
import Hero from "./hero";           // hero.jsx is in the same folder as Home.jsx
import Aboutus from "./Aboutus";     // Aboutus.jsx is in the same folder
import ServicesForHome from "./ServicesForHome"; 
import Process from "./process"
import WhyChooseUs from "./WhyUs";
import Industries from './Industries'
import TechWeUse from './TechWeUse'
import FAQ from './FAQ'
import ContactForHome from './ContactForHome'
import Terms from "./Terms";


export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");

    const handleScroll = () => {
      sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 50) {
          section.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Hero />
      <Aboutus />
      <ServicesForHome/>
      <Process/>
      <WhyChooseUs/>
      <Industries/>
      <TechWeUse/>
      <FAQ/>
      <ContactForHome/>
    </>
  );
}
