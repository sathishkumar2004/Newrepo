import React from "react";
import "../styles/home.css";

export default function WhyChooseUs() {
  return (
    <section className="whyus-section" id="whyus">
      {/* Heading and intro */}
      <div className="whyus-header">
        <h2>Why Choose Us</h2>
        <p>
          We deliver quality, innovation, and reliability through our solutions — helping businesses grow smarter, faster, and more efficiently.
        </p>
      </div>

      {/* 3 small boxes */}
      <div className="whyus-top-boxes">
        <div className="whyus-small-box">
          <h3>100%</h3>
          <p>Client Satisfaction</p>
        </div>
        <div className="whyus-small-box">
          <h3>24/7</h3>
          <p>Support Availability.</p>
        </div>
        <div className="whyus-small-box">
          <h3>20+</h3>
          <p>Projects Completed</p>
        </div>
      </div>

      {/* 2x2 feature grid */}
      <div className="whyus-feature-grid">
        <div className="whyus-feature">
          <p className="feature-icon">👥</p>
          <h3>Expert Team</h3>
          <p>Clean, modern, and user-focused designs for better experience.</p>
          <ul>
            <li>Seasoned Professionals</li>
            <li>Diverse Expertise</li>
            <li>Continuous Learning</li>
          </ul>
        </div>
        <div className="whyus-feature">
          <p className="feature-icon">💻</p>
          <h3>Cutting-Edge Technology</h3>
          <p>Robust and scalable solutions using the latest technologies.</p>
          <ul>
            <li>Latest frameworks</li>
            <li>Cloud-ready apps</li>
            <li>Secure coding standards</li>
          </ul>
        </div>
        <div className="whyus-feature">
          <p className="feature-icon">🎯</p>
          <h3>Client-Centric Approach</h3>
          <p>24/7 support to ensure smooth performance of your product.</p>
          <ul>
            <li> Feedback-driven</li>
            <li> Transparent process</li>
            <li> Timely delivery</li>
          </ul>
        </div>
        <div className="whyus-feature">
          <p className="feature-icon">📊</p>
          <h3>Proven Methodology</h3>
          <p>We optimize every line of code for speed and reliability.</p>
          <ul>
            <li> Agile workflow</li>
            <li> Quality assurance</li>
            <li> Continuous improvement</li>
          </ul>
        </div>
      </div>

      {/* Final CTA */}
      <div className="whyus-cta">
        <h2>Let’s Build Something Great Together</h2>
        <p>Ready to take your business to the next level? Work with our expert team today.</p>
        <button>Get in Touch</button>
      </div>
    </section>
  );
}
