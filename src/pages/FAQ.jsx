import React, { useState, useEffect } from "react";
import "../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "What services do you provide?",
    answer:
      "We provide full-stack web and mobile app development, including UI/UX design, cloud integration, and maintenance.",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes, we provide long-term support, performance optimization, and version upgrades for all projects.",
  },
  {
    question: "How long will my project take?",
    answer:
      "Timelines depend on scope and complexity, but we always ensure on-time delivery with regular updates.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2
        className="faq-heading"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Frequently Asked Questions
      </h2>

      <div className="faq-container" data-aos="fade-up"
            data-aos-delay={200} >
        {faqData.map((item, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
            // staggered animation
          >
            <div className="faq-question">
              <div className="question-left">
                <div className="question-emoji">❓</div>
                {item.question}
              </div>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
