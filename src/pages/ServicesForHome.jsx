import React, { useEffect, forwardRef } from "react";
import "../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Import icons
import codeIcon from "../assets/code.svg";
import UIUXIcon from "../assets/uiux.svg";
import MobileIcon from "../assets/mobile.svg";
import GameIcon from "../assets/gamepad.svg";
import BrainIcon from "../assets/brain.svg";
import CloudIcon from "../assets/cloud.svg";

// Forward ref so Hero button can scroll here
const ServicesForHome = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const services = [
    { icon: codeIcon, title: "Web Development", desc: "Modern, scalable websites using the latest technologies." },
    { icon: UIUXIcon, title: "UI/UX Design", desc: "Beautiful and user-friendly design experiences." },
    { icon: MobileIcon, title: "App Development", desc: "Cross-platform mobile apps for all devices." },
    { icon: GameIcon, title: "Game Development", desc: "Scalable multiplayer and immersive gaming solutions." },
    { icon: BrainIcon, title: "AI / ML Services", desc: "Intelligent automation and predictive analytics." },
    { icon: CloudIcon, title: "Cloud Services", desc: "Reliable and secure cloud-based infrastructure." },
  ];

  return (
    <section id="services" ref={ref} className="boxes-section">
      <h2 className="section-heading" data-aos="fade-up" data-aos-delay="100">
        Our Services
      </h2>

      <div className="boxes-container">
        {services.map((service, index) => (
          <div
            className="box-card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={100 * (index + 1)}
          >
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h1>{service.title}</h1>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default ServicesForHome;
