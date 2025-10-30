import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/about.css";

const offerData = [
  {
    emoji: "💻",
    title: "Web Development",
    text: "Creating fast, responsive, and modern web applications.",
    link: "/services/web-development",
  },
  {
    emoji: "🎨",
    title: "UI/UX Design",
    text: "Designing user-friendly interfaces with seamless experiences.",
    link: "/services/ui-ux-design",
  },
  {
    emoji: "📈",
    title: "Digital Strategy",
    text: "Helping your brand grow through smart digital solutions.",
    link: "/services/digital-strategy",
  },
  {
    emoji: "🏷️",
    title: "Brand Identity",
    text: "Building unique visual identities that make you stand out.",
    link: "/services/brand-identity",
  },
];

export default function WhatWeOffer() {
  const navigate = useNavigate();

  return (
    <section className="offer-section" id="what-we-offer">
      <h2 className="offer-heading">
        What <span>We Offer</span>
      </h2>
      <p className="offer-intro">
        Comprehensive solutions for your digital needs.
      </p>

      <div className="offer-grid">
        {offerData.map((item, idx) => (
          <div
            key={idx}
            className="offer-card"
            onClick={() => navigate(item.link)}
          >
            <div className="offer-emoji">{item.emoji}</div>
            <h3 className="offer-title">{item.title}</h3>
            <p className="offer-text">{item.text}</p>
            <div className="offer-link">
              Learn More <span className="arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
