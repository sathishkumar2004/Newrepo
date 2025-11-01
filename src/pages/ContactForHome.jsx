import React from "react";
import "../styles/home.css";

// Social media PNGs
import InstagramIcon from "../assets/Socialmedia/instagram.png";
import LinkedinIcon from "../assets/Socialmedia/linkedin.png";
import WhatsappIcon from "../assets/Socialmedia/whatsapp.png";
import FacebookIcon from "../assets/Socialmedia/twitter.png";

// Contact PNGs (📍, 📱, ✉️ replacements)
import LocationIcon from "../assets/Socialmedia/gps.png";
import PhoneIcon from "../assets/Socialmedia/phone-call.png";
import EmailIcon from "../assets/Socialmedia/email.png";

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
        alert("✅ Message sent successfully!");
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
    <section className="home-contact-page">
      {/* === Top Row === */}
      <div className="home-contact-top">
        <h2>Get in Touch</h2>
        <p>We’d love to hear from you — let’s build something great together!</p>
      </div>

      {/* === Bottom Row (Left: Info | Right: Form) === */}
      <div className="home-contact-bottom">
        {/* Left - Contact Info */}
        <div className="home-contact-info">
          <div className="home-contact-info-item">
            <img src={LocationIcon} alt="Location" className="home-contact-icon" />
            <div>
              <h4>Address</h4>
              <p>
                No.469 Pavalamalli St, Extn.<br />
                Narasimhapuram, Kakkalur<br />
                Tiruvallur - 602 003
              </p>
            </div>
          </div>

          <div className="home-contact-info-item">
            <img src={PhoneIcon} alt="Phone" className="home-contact-icon" />
            <div>
              <h4>Phone</h4>
              <p>+91 9444369625</p>
            </div>
          </div>

          <div className="home-contact-info-item">
            <img src={EmailIcon} alt="Email" className="home-contact-icon" />
            <div>
              <h4>Email</h4>
              <p>burjtechconsultancy@gmail.com</p>
            </div>
          </div>

          <div className="home-contact-social">
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

        {/* Right - Contact Form */}
        <div className="home-contact-form-section">
          <form onSubmit={handleSubmit} className="home-contact-form">
            <div className="home-contact-form-row">
              <div className="home-contact-form-group">
                <label htmlFor="fullname">Full Name *</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="home-contact-form-group">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter your company"
                />
              </div>
            </div>

            <div className="home-contact-form-row">
              <div className="home-contact-form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="home-contact-form-group">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div className="home-contact-form-group">
              <label htmlFor="project">Project Details *</label>
              <textarea
                id="project"
                name="project"
                rows="4"
                required
                placeholder="Enter your project details"
              ></textarea>
            </div>

            <button type="submit" className="home-contact-send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
