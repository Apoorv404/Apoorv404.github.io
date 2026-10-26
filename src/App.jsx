
import { useState, useEffect } from "react";
import AOS from "aos";
import AppNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import Snowfall from "./components/Snowfall";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    if (!apiUrl) {
      console.warn("VITE_API_URL is not configured");
      return;
    }

    const visitKey = "portfolio_visit_recorded";

    try {
      if (sessionStorage.getItem(visitKey)) {
        return;
      }

      sessionStorage.setItem(visitKey, "true");
    } catch {
      console.warn(
        "Session storage unavailable; visit deduplication is disabled."
      );
    }

    fetch(`${apiUrl.replace(/\/+$/, "")}/api/visit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Visit tracking failed: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        console.log("Website visit recorded:", data.totalVisits);
      })
      .catch((error) => {
        console.error("Visit tracking failed:", error);
      });
  }, []);

  return (
    <div className="dark-mode">
      <Snowfall />

      <AppNavbar setActiveSection={setActiveSection} />

      {activeSection === "home" && <Hero />}

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

      {activeSection === "home" && <Footer />}
    </div>
  );
}

export default App;
