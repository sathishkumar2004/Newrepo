import React, { useEffect } from "react";
import "../styles/home.css";
import AOS from "aos";
import "aos/dist/aos.css";

// import step1Icon from "../assets/code.svg";
// import step2Icon from "../assets/uiux.svg";
// import step3Icon from "../assets/mobile.svg";
// import step4Icon from "../assets/gamepad.svg";
// import step5Icon from "../assets/brain.svg";
// import step6Icon from "../assets/cloud.svg";

export default function OurProcess() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  const steps = [
    {  title: "Requirement Analysis", desc: "Requirement analysis is the phase for business needs assessment. Following best practices for professional requirement analysis for software projects, we start this at the project initiation phase, identify risks, assign key stakeholders, and establish a project timeline listing all assumptions for clarity and approval from both sides.." },
    { title: "Scope Definition & Prototyping", desc: "The scope definition and prototyping stage is for clear scope definition for software projects. For effective scope definition and prototyping solutions, we analyse product requirements to select the appropriate technology for it, create a comprehensive Business Requirement Document, Functional Document, Sprint Planning, use cases, and follow the fixed scope for MVP development ↗, creating low fidelity wireframes.." },
    { title: "UIUX Design", desc: "The UI/UX design marks an important milestone for developing any app as end users directly experience it. As part of our professional UI/UX design services for mobile apps and web apps, we prioritize intuitive user interface design ↗ after thorough research and iterate on multiple versions for feedback from users and stakeholders before deciding on the final one." },
    {  title: "Development", desc: "App development takes place parallely with design, where we complete initial tech architecture and database design. Post design approval, we follow Agile development methodologies for continuous development and delivery. As part of our comprehensive software development services, we work on two-week sprints, cover change management, and report weekly progress." },
    {  title: "Testing", desc: "We follow the traditional STLC process for end-to-end software testing for mobile applications. Manual QA testing ↗ is conducted in the initial phase and on approaching launch, we conduct UAT, Load, and Smoke testing. We prioritize code quality and code-level testing as part of our comprehensive QA and testing solutions and leverage advanced automated testing tools too based on project needs to deliver a bug-free application.." },
    { title: "Launch", desc: "The app launch is the dream phase where your idea has a tangible form and is ready for its users. As part of our expert app launch services for iOS ↗ and Android ↗, we follow a comprehensive checklist to go live, manage third-party integrations, and cater to PlayStore and App Store publishing compliances in advance to enable you to focus on GTM.." },
    // { icon: step6Icon, title: "Maintenance", desc: "Continuous support and updates post-launch." },
    // { icon: step6Icon, title: "Maintenance", desc: "Our post-launch support offers expert software maintenance and reliable app maintenance services for businesses, covering application optimization, weekly backups, alignment with user feedback, migration, performance enhancements, and server maintenance to help you achieve consistent top-notch app performance.." },

  ];

  return (
    <section id="process" className="process-section">
      <div className="process-container">
        <h2 className="process-heading">Our <br /> <span style={{color:'black'}}>Process</span> </h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div
              className="step-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <img src={step.icon} alt={step.title} className="step-icon" />
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
