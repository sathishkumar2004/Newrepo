import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/about.css";

export default function ReadyToStart() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="ready-section">
      <div className="ready-container">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Ready to Start Your Project?
        </h2>
        <p data-aos="fade-up" data-aos-delay="200">
          Get in touch with us today and let's create something amazing together.
        </p>
        <button
          className="contact-btn"
          data-aos="fade-up"
          data-aos-delay="300"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
