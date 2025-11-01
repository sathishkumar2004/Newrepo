import React, { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/career.css";
import AOS from "aos";

export default function WorkWithUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // smooth timing
      easing: "ease-in-out",
      once: true, // animate only once
      mirror: false,
    });
    AOS.refresh();
  }, []);

  const benefits = [
    { emoji: "💰", title: "Competitive Salary", desc: "We offer industry-leading pay for top talent." },
    { emoji: "🕒", title: "Flexible Work", desc: "Enjoy flexible hours and hybrid work options." },
    { emoji: "📚", title: "Learning & Growth", desc: "Grow your skills with workshops and mentorship." },
    { emoji: "💊", title: "Health Insurance", desc: "Comprehensive coverage for you and your family." },
    { emoji: "💻", title: "Latest Equipment", desc: "Get cutting-edge tools to do your best work." },
    { emoji: "🎉", title: "Team Events", desc: "We celebrate wins and have fun together often." },
  ];

  return (
    <section className="work-section" data-aos="fade-up">
      <h2 className="section-heading">Why Work With Us</h2>

      <p className="section-subtext">
        Join an environment that values innovation, creativity, and growth.
        Together, we build solutions that make a real impact.
      </p>

      {/* 👇 Apply AOS animation to the whole container */}
      <div
        className="work-container"
        data-aos="zoom-in-up"
        data-aos-delay="200"
      >
        {benefits.map((item, index) => (
          <div className="work-card" key={index}>
            <div className="emoji">{item.emoji}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
