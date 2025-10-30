import React, { useEffect } from "react";
import "../styles/career.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WorkWithUs() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out" ,
      once: false,
      mirror: true,
    });
  }, []);

  const benefits = [
    {
      emoji: "💰",
      title: "Competitive Salary",
      desc: "We offer industry-leading pay for top talent.",
    },
    {
      emoji: "🕒",
      title: "Flexible Work",
      desc: "Enjoy flexible hours and hybrid work options.",
    },
    {
      emoji: "📚",
      title: "Learning & Growth",
      desc: "Grow your skills with workshops and mentorship.",
    },
    {
      emoji: "💊",
      title: "Health Insurance",
      desc: "Comprehensive coverage for you and your family.",
    },
    {
      emoji: "💻",
      title: "Latest Equipment",
      desc: "Get cutting-edge tools to do your best work.",
    },
    {
      emoji: "🎉",
      title: "Team Events",
      desc: "We celebrate wins and have fun together often.",
    },
  ];

  return (
    <section className="work-section">
      <h2 className="section-heading" data-aos="fade-zoom-in" data-aos-delay="100">
        Why Work With Us
      </h2>

      <p className="section-subtext" data-aos="fade-zoom-in" data-aos-delay="100">
        Join an environment that values innovation, creativity, and growth.
        Together, we build solutions that make a real impact.
      </p>

      <div className="work-container">
        {benefits.map((item, index) => (
          <div
            className="work-card"
            key={index}
            data-aos="fade-zoom-in"
            data-aos-delay={200} // 🔹 staggered animation
          >
            <div className="emoji">{item.emoji}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
