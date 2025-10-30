import React from "react";
import "../styles/career.css";
import cultureImg from "../assets/opening.jpg"; 

export default function CareerCulture() {
  return (
    <section className="career-culture-section">
      <div className="career-culture-content">
        <h2>Our Culture</h2>
        <p>
          At Burj Tech, we foster a culture of innovation, collaboration, and continuous
          learning. We believe that great ideas can come from anywhere, and we empower
          every team member to contribute to our shared success.
        </p>
        <p>
          Our values include transparency, accountability, and a commitment to excellence
          in everything we do. We celebrate diversity and believe that different perspectives
          make us stronger as a team and as a company.
        </p>
        <button className="career-culture-btn">Learn More About Us</button>
      </div>

      <div className="career-culture-image">
        <img src={cultureImg} alt="Our Culture" />
      </div>
    </section>
  );
}
