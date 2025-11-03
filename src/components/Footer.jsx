import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

import Instagram from "../assets/Socialmedia/instagram.png";
import LinkedIn from "../assets/Socialmedia/linkedin.png";
import Twitter from "../assets/Socialmedia/twitter.png";
import Whatsapp from "../assets/Socialmedia/whatsapp.png";
import footerlogo from "../assets/aboutus.jpeg"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info */}
        <div className="footer-logo">
          <img src={footerlogo} alt="ABC Logo" />
          <p>
            ABC Tech Consultancy (OPC) Pvt Ltd <br />
            No. 123 Kanchipuram St, Extn. Kanchipuram, <br />
            Kanchipuram - 631601, Tamil Nadu, India
          </p>
        </div>

        {/* Overview */}
        <div className="footer-section">
          <h4>Overview</h4>
          <ul>
            <li>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li>Privacy Policy</li>
            <li>
              <Link to="/contact">contact Us</Link>
            </li>
            <li>
              <Link to="/Careers">Careers</Link>
            </li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>For Business</h4>
          <p>📞 +91-1234567891</p>
          <p>📧 abc@gmail.com</p>
          <h4>For Careers</h4>
          <p>📞 +91-1234567891</p>
          <p>📧 support@acbglobal.info</p>
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
        <p>© 2025 - ABC Pvt Ltd</p>
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
