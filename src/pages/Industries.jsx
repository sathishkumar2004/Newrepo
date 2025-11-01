import React, { useState, useEffect } from "react";
import "../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Industries() {
  useEffect(() => {
    AOS.init({
      duration: 200,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const industriesData = [
    {
      emoji: "🏥",
      title: "Healthcare",
      desc: "All kind of industry",
      rightTitle: "Transforming Healthcare",
      rightDesc:
        "We provide telemedicine platforms, patient management systems, and AI-driven diagnostic tools, enhancing patient care while ensuring data privacy and compliance with standards.",
      boxes: [
        { title: "Dicom Viewer" },
        { title: "Digital Banking" },
        { title: "Patient Management" },
        { title: "Doctor Appointment" },
      ],
    },
    {
      emoji: "🏦",
      title: "Finance",
      desc: "All kind of industry",
      rightTitle: "Revolutionizing Finance",
      rightDesc:
        "We build fintech platforms with top-notch security and performance for digital banking and trading systems.",
      boxes: [
        { title: "Digital Banking" },
        { title: "Fraud Detection" },
        { title: "Payment Systems" },
      ],
    },
    {
      emoji: "🛒",
      title: "Retail",
      desc: "All kind of industry",
      rightTitle: "Empowering Retail",
      rightDesc:
        "We design modern e-commerce systems that enhance efficiency and customer engagement.",
      boxes: [
        { title: "E-Commerce" },
        { title: "Inventory" },
        { title: "Analytics" },
        { title: "Marketing" },
      ],
    },
    {
      emoji: "🏭",
      title: "Manufacturing",
      desc: "All kind of industry",
      rightTitle: "Optimizing Manufacturing",
      rightDesc:
        "From ERP to IoT, our tools automate workflows and increase productivity.",
      boxes: [
        { title: "ERP Systems" },
        { title: "IoT" },
        { title: "Quality" },
        { title: "Maintenance" },
      ],
    },
    {
      emoji: "✈️",
      title: "Travel & Tourism",
      desc: "All kind of industry",
      rightTitle: "Simplifying Travel",
      rightDesc:
        "We develop travel platforms that streamline booking, planning, and travel experiences.",
      boxes: [
        { title: "Booking" },
        { title: "Portals" },
        { title: "CRM" },
        { title: "Updates" },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = industriesData[activeIndex];

  return (
    <section className="industries-section" id="industries">
      <h2 className="main-heading">Industries We Serve</h2>

      <div className="industries-grid">
        {/* Left Column - Buttons (NO AOS) */}
        <div className="col buttons-col">
          {industriesData.map((item, index) => (
            <div
              key={index}
              className={`feature-card ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="card-left">
                <span className="feature-emoji">{item.emoji}</span>
              </div>
              <div className="card-right">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Column - Emoji (WITH AOS) */}
        <div
          className="col image-col"
          key={activeItem.emoji}
          data-aos="fade-up"
        >
          <div className="emoji-display">{activeItem.emoji}</div>
        </div>

        {/* Right Column - Content + Boxes (WITH AOS) */}
        <div
          className="col boxes-col"
          key={activeItem.title}
          data-aos="fade-up"
        >
          <div className="col3-heading">
            <h1>{activeItem.rightTitle}</h1>
            <p>{activeItem.rightDesc}</p>
          </div>
          <div className="feature-box-grid">
            {activeItem.boxes.map((box, index) => (
              <div
                className="feature-box"
                key={index}
              >
                <h4>{box.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
