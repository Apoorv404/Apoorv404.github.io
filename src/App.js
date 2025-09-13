import React, { useState, useEffect } from "react";
import AOS from "aos";
import AppNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="dark-mode">
      <AppNavbar setActiveSection={setActiveSection} />

      {/* Home Page (no footer lock) */}
      {activeSection === "home" && <Hero />}

      {/* Other Pages wrapped in flexbox container */}
      {activeSection !== "home" && (
        <div className="page-container">
          <div className="page-content">
            {activeSection === "projects" && <Projects />}
            {activeSection === "contact" && <Contact />}
            {activeSection === "about" && <About />}
          </div>
          <Footer />
        </div>
      )}

      {/* Home page footer shown normally */}
      {activeSection === "home" && <Footer />}
    </div>
  );
}

export default App;
