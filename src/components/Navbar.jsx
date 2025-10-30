import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import logo from "../assets/headlogo.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true, // Run only once when page loads
    });
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Scroll to top when the route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const toggleMenu = () => setOpen(!open);

  // Scroll to top if already on Home
  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setOpen(false);
  };

  // Scroll or navigate to section
  const handleScrollToSection = (id) => {
    if (location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
    setOpen(false);
  };

  return (
    <>
      <nav className="navbar" data-aos="fade-down">
        {/* Logo */}
        <div className="navbar-left" data-aos="fade-down" data-aos-delay="100">
          <Link to="/" className="brand" onClick={handleHomeClick}>
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="navbar-right" data-aos="fade-down" data-aos-delay="200">
          <ul className="nav-links">
            <li data-aos="fade-down" data-aos-delay="250"><Link to="/" onClick={handleHomeClick}>Home</Link></li>
            <li data-aos="fade-down" data-aos-delay="300"><Link to="/about">About</Link></li>
            <li data-aos="fade-down" data-aos-delay="350"><Link to="/#services" onClick={() => handleScrollToSection("services")}>Services</Link></li>
            <li data-aos="fade-down" data-aos-delay="400"><Link to="/#industries" onClick={() => handleScrollToSection("industries")}>Industries</Link></li>
            <li data-aos="fade-down" data-aos-delay="450"><Link to="/#whyus" onClick={() => handleScrollToSection("whyus")}>Why Us</Link></li>
            <li data-aos="fade-down" data-aos-delay="500"><Link to="/careers">Careers</Link></li>
            <li data-aos="fade-down" data-aos-delay="550"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Hamburger for mobile */}
        <div
          className={`hamburger ${open ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <ul className="mobile-nav-links">
          <li><Link to="/" onClick={handleHomeClick}>Home</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
          <li><Link to="/#services" onClick={() => handleScrollToSection("services")}>Services</Link></li>
          <li><Link to="/#industries" onClick={() => handleScrollToSection("industries")}>Industries</Link></li>
          <li><Link to="/#whyus" onClick={() => handleScrollToSection("whyus")}>Why Us</Link></li>
          <li><Link to="/careers" onClick={toggleMenu}>Careers</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      </div>
    </>
  );
}
