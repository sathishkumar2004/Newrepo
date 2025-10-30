import React from "react";
import "../styles/career.css";

export default function CareerOpenings() {
  return (
    <section className="career-openings-section">
      <div className="career-openings-header">
        <h2>Current Openings</h2>
        <p>
          Explore our available positions and find where you fit in our growing team.
        </p>
      </div>

      <div className="career-openings-card">
        <div className="career-openings-icon">💼</div>
        <h3>No Open Positions Currently</h3>
        <p>
          We don't have any open positions at the moment, but we're always interested in meeting talented people.
          Please check back later or send us your resume for future opportunities.
        </p>
        <button className="career-openings-btn">Submit General Application</button>
      </div>
    </section>
  );
}
