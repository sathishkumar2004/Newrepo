import React, { useEffect } from "react";
import "../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // ✅ Scroll function
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="overlay"></div>
      <div className="hero-content" data-aos="fade-up">
        <h1>Crafting Digital Excellence</h1>
        <p className="lead">
          We're a passionate team creating innovative solutions for the modern world.
        </p>
        <div className="hero-buttons" data-aos="fade-up">
          {/* 👇 Updated ID */}
          <button
            className="btn btn-primary"
            onClick={() => handleScrollToSection("about-us")}
          >
            About Us
          </button>
        </div>
      </div>
    </section>
  );
}
