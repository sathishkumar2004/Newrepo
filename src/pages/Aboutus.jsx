import React, { useEffect, forwardRef } from "react";
import aboutus from "../assets/aboutus1.jpeg";
import "../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutus = forwardRef((props, ref) => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="about-us" ref={ref} className="about-section">
      <div className="about-container" data-aos="fade-up">
        {/* Left: Image */}
        <div className="about-image">
          <img src={aboutus} alt="About us" />
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <h2>
            About <span className="highlight">Us</span>
          </h2>
          <p>
            At <strong>ABC Consultancy Pvt Ltd</strong>, we specialize in
            innovative technology solutions that help businesses grow,
            transform, and stay ahead of the curve.
          </p>
          <p>
            With a passionate team and a client-first approach, every solution
            we deliver is tailored to align with your vision and business goals.
          </p>
        </div>
      </div>
    </section>
  );
});

export default Aboutus;
