// src/pages/ContactForHome.jsx
import React from "react";
import "../styles/home.css";

// Social media PNGs
import InstagramIcon from "../assets/Socialmedia/instagram.png";
import LinkedinIcon from "../assets/Socialmedia/linkedin.png";
import WhatsappIcon from "../assets/Socialmedia/whatsapp.png";
import FacebookIcon from "../assets/Socialmedia/twitter.png";

export default function ContactForHome() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullname: e.target.fullname.value,
      company: e.target.company.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      project: e.target.project.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Message sent successfully from Home!");
        e.target.reset();
      } else {
        alert("❌ Failed: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="contact-page">
      {/* Left Section – Contact Info */}
      <div className="contact-info">
        <div className="contact-header">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Reach out anytime!</p>
        </div>

        <div className="info-item">
          <span className="home-contact-emoji">📍</span>
          <p>
            No.469 Pavalamalli St, Extn.<br />
            Narasimhapuram, Kakkalur<br />
            Tiruvallur - 602 003
          </p>
        </div>

        <div className="info-item">
          <span className="home-contact-emoji">📱</span>
          <p>+91 94443 96625</p>
        </div>

        <div className="info-item">
          <span className="home-contact-emoji">✉️</span>
          <p>burjtechconsultancy@gmail.com</p>
        </div>

        {/* Social Media Links */}
        <div className="contact-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" />
          </a>
          <a href="https://wa.me/919444396625" target="_blank" rel="noopener noreferrer">
            <img src={WhatsappIcon} alt="WhatsApp" />
          </a>
        </div>
      </div>

      {/* Right Section – Contact Form */}
      <div className="contact-form-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullname">Full Name *</label>
              <input type="text" id="fullname" name="fullname" required placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" placeholder="Enter your company" />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" required placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
              <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="project">Project Details *</label>
            <textarea id="project" name="project" rows="4" required placeholder="Enter your project details"></textarea>
          </div>

          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
