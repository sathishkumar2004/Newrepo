import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contact.css"; // 👈 make sure you link the new CSS file

// ✅ PNG imports
import AddressIcon from "../assets/Socialmedia/gps.png";
import PhoneIcon from "../assets/Socialmedia/phone-call.png";
import EmailIcon from "../assets/Socialmedia/email.png";

export default function ContactForHome() {
  const [formData, setFormData] = useState({
    fullname: "",
    company: "",
    email: "",
    phone: "",
    project: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in",
      once: true,
      offset: 100,
    });
  }, []);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("✅ Your message has been sent successfully!");
        setFormData({
          fullname: "",
          company: "",
          email: "",
          phone: "",
          project: "",
        });
      } else {
        alert("❌ Failed to send message: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="contacthome-section">
      <div className="contacthome-container" data-aos="fade-up">
        {/* Header */}
        <div className="contacthome-header">
          <h2>Get in Touch With</h2>
          <h3> ABC Tech Consultancy Pvt Ltd</h3>
          <p>We're here to help. Whether you have questions about our services, need support, or want to discuss potential collaborations.</p>
        </div>

        <div className="contacthome-content">
          {/* Left Side - Contact Info */}
          <div className="contacthome-left" data-aos="fade-right">
            <div className="contacthome-info">
              <img
                src={AddressIcon}
                alt="Address"
                className="contacthome-icon"
              />
              <div>
                <h3>Address</h3>
                <p>
                  No.469 Pavalamalli St, Extn.
                  <br />
                  Narasimhapuram, Kakkalur
                  <br />
                  Tiruvallur - 602 003
                </p>
              </div>
            </div>

            <div className="contacthome-info">
              <img src={PhoneIcon} alt="Phone" className="contacthome-icon" />
              <div>
                <h3>Phone</h3>
                <p>+91 9444369625</p>
              </div>
            </div>

            <div className="contacthome-info">
              <img src={EmailIcon} alt="Email" className="contacthome-icon" />
              <div>
                <h3>Email</h3>
                <p>burjtechconsultancy@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contacthome-right" data-aos="fade-left">
            <form onSubmit={handleSubmit} className="contacthome-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullname">Full Name *</label>
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name *</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="project">Project Description *</label>
                <textarea
                  id="project"
                  name="project"
                  rows="5"
                  placeholder="Tell us about your project..."
                  value={formData.project}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="send-btn">
                Send Message <span className="arrow">➤</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
