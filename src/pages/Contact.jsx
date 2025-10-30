import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/contact.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in",
      once: true,
      offset: 100,
    });
  }, []);

  // 🧠 Replace your old handleSubmit with this one
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Your message has been sent successfully!");
        e.target.reset();
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
          <div className="contact-left" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-card">
              <span className="emoji">✉️</span>
              <h3>Email Us</h3>
              <p>burjtechconsultancy@gmail.com</p>
            </div>

            <div className="contact-card">
              <span className="emoji">📱</span>
              <h3>Call Us</h3>
              <p>+91 94443 96625</p>
            </div>

            <div className="contact-card">
              <span className="emoji">📍</span>
              <h3>Visit Us</h3>
              <p>
                No.469 Pavalamalli St, Extn.
                <br />
                Narasimhapuram, Kakkalur
                <br />
                Tiruvallur - 602 003
              </p>
            </div>
          </div>

          {/* ---------- Right Form Section ---------- */}
          <div className="contact-right" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-form">
              {/* 👇 This form uses the new handleSubmit */}
              <form onSubmit={handleSubmit}>
                {/* Row 1 */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullname">Full Name *</label>
                    <input
                      id="fullname"
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Company Name *</label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Enter your company name"
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
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="form-group">
                  <label htmlFor="project">Describe Your Project *</label>
                  <textarea
                    id="project"
                    rows="5"
                    placeholder="Tell us a little about your project..."
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
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
