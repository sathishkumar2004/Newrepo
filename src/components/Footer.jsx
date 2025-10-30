import React from "react";
import "../styles/footer.css";

import Instagram from "../assets/Socialmedia/instagram.png";
import LinkedIn from "../assets/Socialmedia/linkedin.png";
import Twitter from "../assets/Socialmedia/twitter.png";
import Whatsapp from "../assets/Socialmedia/whatsapp.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-logo">
          <img src={''} alt="BTC Logo" />
          <p>
            BURJ Tech Consultancy (OPC) Pvt Ltd <br />
            No. 469 Pavalamalli St, Extn. Narasimhapuram, <br />
            Kakkalur, Thiruvallur - 602003, Tamil Nadu, India
          </p>
        </div>

        {/* Overview */}
        <div className="footer-section">
          <h4>Overview</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>For Business</h4>
          <p>📞 +91-9444369625</p>
          <p>📧 burjtechconsultancy@gmail.com</p>
          <h4>For Careers</h4>
          <p>📞 +91-9444369625</p>
          <p>📧 support@btcglobal.info</p>
        </div>

        {/* Newsletter */}
        <div className="footer-news">
          <h4>Let's stay in touch!</h4>
          <p>Join our newsletter for insights and updates.</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom with Icons */}
      <div className="footer-bottom">
        <p>© 2025 - BTC Pvt Ltd</p>
        <div className="footer-social">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Twitter} alt="Twitter" />
          </a>
          <a
            href="https://wa.me/919444396625"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Whatsapp} alt="WhatsApp" />
          </a>
        </div>
      </div>
    </footer>
  );
}
