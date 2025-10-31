import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    company: "",
    email: "",
    countryCode: "+91",
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

    // Combine country code with phone number
    const completePhone = `${formData.countryCode} ${formData.phone}`;
    const payload = { ...formData, phone: completePhone };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Your message has been sent successfully!");
        setFormData({
          fullname: "",
          company: "",
          email: "",
          countryCode: "+91",
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
    <section className="contact-section">
      <div className="contact-wrapper" data-aos="fade-up">
        <div className="contact-header" data-aos="fade-up">
          <h2>📞 Contact Us</h2>
          <p>We’d love to collaborate — tell us about your project idea!</p>
        </div>

        <div className="contact-container" data-aos="fade-up">
          {/* Left Side */}
          <div className="contact-left" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-card">
              <span className="emoji">✉️</span>
              <h3>Email Us</h3>
              <p>abcconsultancy@gmail.com</p>
            </div>

            <div className="contact-card">
              <span className="emoji">📱</span>
              <h3>Call Us</h3>
              <p>+91 1234567891</p>
            </div>

            <div className="contact-card">
              <span className="emoji">📍</span>
              <h3>Visit Us</h3>
              <p>
                No. 123 Abc Street
                <br />
                1st Cross St, KK Nagar
                <br />
                Chennai - 601 002
              </p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="contact-right" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                {/* Row 1 */}
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

                {/* Row 2 */}
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
                    <label htmlFor="phone">Phone Number *</label>
                    <div className="phone-input">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                      >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+971">🇦🇪 +971</option>
                      </select>
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
                </div>

                {/* Row 3 */}
                <div className="form-group">
                  <label htmlFor="project">Describe Your Project *</label>
                  <textarea
                    id="project"
                    name="project"
                    rows="5"
                    placeholder="Tell us a little about your project..."
                    value={formData.project}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {/* Button */}
                <button type="submit" className="send-btn">
                  Send Message <span className="arrow">➤</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
