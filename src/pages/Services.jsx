import React, { useEffect } from "react";
import "../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import codeIcon from "../assets/code.svg";
// import UIUXIcon from "../assets/uiux.svg";
// import MobileIcon from "../assets/mobile.svg";
// import GameIcon from "../assets/gamepad.svg";
// import BrainIcon from "../assets/brain.svg";
// import CloudIcon from "../assets/cloud.svg";

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 900,      // animation speed
      easing: "ease-in-out-sine",
      offset: 120,        // trigger point
      once: false,        // re-trigger on scroll up
      mirror: true,
    });
  }, []);

  const services = [
    { icon: '', title: "Web Development", desc: "Modern, scalable websites with latest tech.", aos: "fade-up" },
    { icon: UIUXIcon, title: "UI/UX Design", desc: "Beautiful and user-friendly designs.", aos: "zoom-in" },
    { icon: MobileIcon, title: "App Development", desc: "Cross-platform mobile applications.", aos: "flip-up" },
    { icon: GameIcon, title: "Game Development", desc: "Scalable multiplayer backends and real-time synchronization.", aos: "fade-left" },
    { icon: BrainIcon, title: "AI/ML Services", desc: "Intelligent solutions powered by AI and machine learning.", aos: "zoom-out" },
    { icon: CloudIcon, title: "Cloud Services", desc: "Reliable cloud solutions for your business.", aos: "fade-right" },
  ];

  return (
    <section id="services" className="boxes-section">
      <h2 className="section-heading" data-aos="fade-down" data-aos-delay="100">
        Our Services
      </h2>

      <div className="boxes-container"  data-aos={service.aos}
            data-aos-delay={200 + index * 100}>
        {services.map((service, index) => (
          <div
            key={index}
            className="box-card"
          >
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h1>{service.title}</h1>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
