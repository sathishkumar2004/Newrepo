import React from "react";
import "../styles/home.css";

// import all pictures from techimages folder
import tech1 from "../assets/techimages/tech1.png";
import tech2 from "../assets/techimages/tech2.png";
import tech3 from "../assets/techimages/tech3.png";
import tech4 from "../assets/techimages/tech4.png";
import tech5 from "../assets/techimages/tech5.png";
import tech6 from "../assets/techimages/tech6.png";
import tech7 from "../assets/techimages/tech7.png";
import tech8 from "../assets/techimages/tech8.png";
import tech9 from "../assets/techimages/tech9.png";
import tech10 from "../assets/techimages/tech10.png";
import tech11 from "../assets/techimages/tech11.png";

export default function TechWeUse() {
  const techLogos = [
    tech1,
    tech2,
    tech3,
    tech4,
    tech5,
    tech6,
    tech7,
    tech8,
    tech9,
    tech10,
    tech11,
  ];

  return (
    <section className="tech-section">
      <div className="tech-header">
        <h2>Technologies We Use</h2>
        <p>
          We work with the latest technologies to build scalable, secure, and
          high-performance applications for our clients across various domains.
        </p>
      </div>

      {/* Infinite scrolling row of logos */}
      <div className="slider">
        <div className="slide-track">
          {techLogos.concat(techLogos).map((logo, index) => (
            <div className="slide" key={index}>
              <img src={logo} alt={`tech-${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
