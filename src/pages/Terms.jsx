import React from "react";
import "../styles/Terms.css";

const Terms = () => {
  return (
    <div className="terms-page">
      <div className="terms-container">
        <h1>Terms and Conditions</h1>
        <p className="updated">📅 Last Updated: October 2025</p>

        {/* ✅ Added your introduction paragraph */}
        <p className="intro">
          These Terms and Conditions ("Agreement") constitute a legally binding
          agreement between <strong>ABC TECH CONSULTANCY</strong> ("Company", "we", "our", or "us")
          and you ("User", "Customer", or "you") governing your access to and
          use of our website <strong>www.abcglobal.info</strong> and related services
          (collectively, the "Service"). By accessing or using our Service, you
          acknowledge that you have read, understood, and agree to be bound by
          this Agreement.
        </p>

        <h2>1. Scope of Services</h2>
        <p>
          We provide online retail and e-commerce services that allow customers
          to browse, purchase, and manage various products. All product details,
          pricing, and availability are displayed on our website and are subject
          to change without prior notice. We reserve the right to modify or
          discontinue any portion of the Service at any time without liability.
        </p>

        <h2>2. Product Information</h2>
        <p>
          We make every effort to display accurate product information,
          descriptions, and prices. However, typographical or pricing errors may
          occur. In such cases, we reserve the right to correct errors or cancel
          orders placed under incorrect pricing or information.
        </p>

        <h2>3. User Responsibilities</h2>
        <ul>
          <li>Provide accurate and up-to-date personal, billing, and contact information.</li>
          <li>Maintain confidentiality of your account credentials.</li>
          <li>Use the Service only for lawful purposes.</li>
          <li>Refrain from engaging in fraudulent or misleading activities.</li>
          <li>Do not upload or transmit malware or harmful code.</li>
        </ul>

        <h2>4. Payment and Billing Terms</h2>
        <p>
          All payments must be made in Indian Rupees (INR) and processed via
          authorized gateways. We do not store sensitive financial data. Refunds
          or cancellations will follow our Refund & Cancellation Policy.
        </p>

        <h2>5. Usage Restrictions</h2>
        <p>
          You agree not to use the Service for any unlawful or prohibited
          activity, including but not limited to unauthorized access, data
          scraping, or disrupting the website performance.
        </p>

        <h2>6. Intellectual Property Ownership</h2>
        <p>
          All materials on this website are owned by BURJ Tech Consultancy or
          its licensors. You may not copy, reproduce, or distribute any content
          without written permission.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          BURJ Tech Consultancy shall not be liable for any indirect or
          consequential damages. Our total liability shall not exceed the total
          amount paid by you for the product or service.
        </p>

        <h2>8. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless BURJ Tech Consultancy, its
          employees, and affiliates from any claims arising out of your use of
          the Service or violation of these Terms.
        </p>

        <h2>9. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the
          Service if you breach these Terms or engage in harmful activities.
        </p>

        <h2>10. Force Majeure</h2>
        <p>
          We are not liable for delays or failures caused by circumstances
          beyond our control, such as natural disasters, war, or internet
          outages.
        </p>

        <h2>11. Dispute Resolution</h2>
        <p>
          Disputes shall first be resolved amicably. If unresolved, they will be
          referred to arbitration under Indian law. Venue: Tiruvallur, Tamilnadu.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These Terms are governed by the laws of India without regard to
          conflict of law principles.
        </p>

        <h2>13. Privacy Policy</h2>
        <p>
          Your use of the Service is also governed by our Privacy Policy,
          detailing how we collect and protect your data.
        </p>

        <h2>14. Amendments</h2>
        <p>
          We may update these Terms at any time. Continued use of the Service
          indicates acceptance of revised Terms.
        </p>

        {/* 📍 Contact Section */}
        <h2>15. Contact Information</h2>
        <div className="contact-highlight">
          <p>
            📧 Website:{" "}
            <a
              href="https://www.ABCglobal.info/contact"
              target="_blank"
              rel="noreferrer"
            >
              www.ABClobal.info/contact
            </a>
          </p>
          <p>📞 Phone: +91-1234567891</p>
          <div className="contact-box">
            🏢 No.30, 4th Cross St, RR Nagar, Chrompet, Chennai -
            602003
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
