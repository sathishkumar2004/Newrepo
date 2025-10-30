import React from "react";
import "../styles/about.css"; // make sure your css file is imported

const Values = () => {
  return (
    <section className="values-section">
      {/* Top Heading Row */}
      <div className="values-header">
        <h2>
          Our <span>Values</span>
        </h2>
        <p>The principles that guide everything we do.</p>
      </div>

      {/* 4 Value Cards */}
      <div className="values-grid">
        <div className="value-card">
          <div className="value-icon">💡</div>
          <h3>Innovation</h3>
          <p>We constantly embrace new ideas to create better solutions for our clients.</p>
        </div>

        <div className="value-card">
          <div className="value-icon">🤝</div>
          <h3>Integrity</h3>
          <p>We build trust by being honest, transparent, and dependable in everything we do.</p>
        </div>

        <div className="value-card">
          <div className="value-icon">🌍</div>
          <h3>Impact</h3>
          <p>We strive to make a positive difference for businesses and communities worldwide.</p>
        </div>

        <div className="value-card">
          <div className="value-icon">🚀</div>
          <h3>Excellence</h3>
          <p>We aim for quality and continuous improvement in every project we deliver.</p>
        </div>
      </div>
    </section>
  );
};

export default Values;
