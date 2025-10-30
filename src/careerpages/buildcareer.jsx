import React, { useEffect } from "react";
import "../styles/career.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function BuildCareer() {
  useEffect(() => {
    AOS.init({
      duration: 800,      // Animation duration in ms
      easing: "ease-in-out",
      once: true,          // Run only once
      mirror: false,       // Don’t animate again on scroll up
    });
  }, []);

  return (
    <section className="buildcareer-section">
      <div className="buildcareer-container">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Build Your Career at BTC
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Join our team of innovators and help shape the future of technology.
          We're always looking for talented individuals who are passionate about
          making an impact.
        </p>
      </div>
    </section>
  );
}
