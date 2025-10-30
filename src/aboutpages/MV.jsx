import React from "react";
import "../styles/about.css";
// import missionImg from "../assets/mission.jpg";
// import visionImg from "../assets/vision.jpg";

const MV = () => {
  return (
    <section className="mv-section">
      <div className="mv-container">
        {/* Mission Card */}
        <div className="mv-card" data-aos="fade-up">
          <img src={''} alt="Our Mission" className="mv-image" />
          <h2>
            Our <span>Mission</span>
          </h2>
          <p>
            Our mission is to empower businesses through innovative technology
            solutions that enhance efficiency, drive growth, and create meaningful
            digital experiences for our clients and their customers.
          </p>
        </div>

        {/* Vision Card */}
        <div className="mv-card" data-aos="fade-up" data-aos-delay="100">
          <img src={''} alt="Our Vision" className="mv-image" />
          <h2>
            Our <span>Vision</span>
          </h2>
          <p>
            Our vision is to become a globally recognized technology partner,
            setting benchmarks in innovation, quality, and client satisfaction —
            shaping the digital future with passion and precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MV;
