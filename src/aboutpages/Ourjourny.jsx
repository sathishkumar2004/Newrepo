import React from "react";
import "../styles/about.css";

const Journey = () => {
  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      text: "We started as a small creative team with a passion for crafting web experiences.",
    },
    {
      year: "2020",
      title: "Expanding Horizons",
      text: "Our team grew and we began offering cloud and mobile solutions to clients globally.",
    },
    {
      year: "2023",
      title: "Innovation & AI",
      text: "Introduced AI-powered tools and automation to enhance customer experiences.",
    },
  ];

  return (
    <section className="journey-modern" id="journey">
      <h2 className="journey-heading">
        Our <span>Journey</span>
      </h2>

      <div className="journey-container">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`journey-card ${index % 2 === 0 ? "left" : "right"}`}
            data-aos="fade-up"
          >
            <div className="journey-content">
              <h3>{item.year}</h3>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
