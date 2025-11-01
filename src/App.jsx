import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Careers from "./pages/Careers.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import About from "./pages/About/About.jsx";
import Terms from "./pages/Terms.jsx"

export default function App() {
  return (
    <div className="app-root">
      <ScrollToTop />
      <Navbar />
      <main style={{ minHeight: "60vh" }}>
        <Routes>
          {/* ✅ All inside Home */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<Terms/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
