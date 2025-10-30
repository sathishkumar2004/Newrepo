import React, { useEffect } from "react";
import "../styles/about.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutHero({ onContactClick, onPortfolioClick }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="about-hero" className="about-hero">
      <div className="overlay"></div>
      <div className="about-hero-content" data-aos="fade-up">
        <h1>About Our Journey</h1>
        <p className="lead">
          We are a team of creative professionals dedicated to transforming ideas
          into impactful digital experiences. Our mission is to design and build
          with purpose, passion, and precision.
        </p>
        <div className="about-hero-buttons">
          <button className="btn btn-outline" onClick={onPortfolioClick}>
            Meet the Team
          </button>
        </div>
      </div>
    </section>
  );
}
