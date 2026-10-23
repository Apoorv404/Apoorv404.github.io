import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { FaJava } from "react-icons/fa";

const roles = [
  "Programmer Analyst Trainee",
  "Quality Engineering & Assurance",
  "Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [logoMotion] = useState(() =>
    Array.from({ length: 6 }, () => {
      const duration = 6 + Math.random() * 5;
      return {
        "--float-duration": `${duration}s`,
        "--float-delay": `${-Math.random() * duration}s`,
      };
    }),
  );

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let intervalId;

    const updateRotation = () => {
      window.clearInterval(intervalId);

      if (!motionPreference.matches) {
        intervalId = window.setInterval(() => {
          setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
        }, 3500);
      }
    };

    updateRotation();
    motionPreference.addEventListener("change", updateRotation);

    return () => {
      window.clearInterval(intervalId);
      motionPreference.removeEventListener("change", updateRotation);
    };
  }, []);

  return (
    <section id="hero" className="hero-section" data-aos="fade-up">
      <div className="hero-logos" aria-hidden="true">
        <img
          src="https://cdn.simpleicons.org/python/3776AB"
          alt="Python logo"
          className="hero-logo logo-1"
          style={logoMotion[0]}
        />
        <FaJava
          className="hero-logo logo-2"
          aria-hidden="true"
          style={logoMotion[1]}
        />
        <img
          src="https://cdn.simpleicons.org/mongodb/47A248"
          alt="MongoDB logo"
          className="hero-logo logo-3"
          style={logoMotion[2]}
        />
        <img
          src="https://cdn.simpleicons.org/react/61DAFB"
          alt="React logo"
          className="hero-logo logo-4"
          style={logoMotion[3]}
        />
        <img
          src="https://cdn.simpleicons.org/tensorflow/FF6F00"
          alt="TensorFlow logo"
          className="hero-logo logo-5"
          style={logoMotion[4]}
        />
        <img
          src="https://cdn.simpleicons.org/github/FFFFFF"
          alt="GitHub logo"
          className="hero-logo logo-6"
          style={logoMotion[5]}
        />
      </div>
      <Container className="text-center hero-inner">
        <div className="pfp-container mb-4">
          <img src="pfp.png" alt="Apoorv Avatar" className="pfp-img" />
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-name">Apoorv</span>
        </h1>
        <h2 className="hero-subtitle mb-3">
          <span key={roles[roleIndex]} className="role">{roles[roleIndex]}</span> <span className="at-symbol">@</span>
          <a href="https://www.cognizant.com/" target="_blank" rel="noopener noreferrer">Cognizant</a>
        </h2>
        <p className="hero-description">
          I'm a Computer Science and Engineering (AI & ML) graduate. Currently working as a Programmer Analyst Trainee at Cognizant, where I am gaining valuable experience in Quality Engineering and Assurance (QEA) domain.
        </p>

        <Button
          className="btn-accent btn-lg mt-3 mb-5"
          href="https://hackerresume-prod.s3.us-east-1.amazonaws.com/resumes/Apoorv404/90e0efb4-9213-4fc7-a96a-550128676732.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Button>

        <div className="skills-container" data-aos="fade-up">
          <h3 className="skills-title mb-4">Tech Stack</h3>
          <div className="skills-grid">
            <span className="skill">Linux</span>
            <span className="skill">Python</span>
            <span className="skill">Java</span>
            <span className="skill">SQL</span>
            <span className="skill">Jira</span>
            <span className="skill">Git</span>
            <span className="skill">Postman</span>
            <span className="skill">React</span>
            <span className="skill">Bootstrap</span>
            <span className="skill">Flask</span>
            <span className="skill">Selenium</span>
            <span className="skill">ApachePOI</span>
            <span className="skill">TestNG</span>
            <span className="skill">Cucumber</span>
            <span className="skill">BeautifulSoup</span>
            <span className="skill">TensorFlow</span>
            <span className="skill">PyTorch</span>
            <span className="skill">NumPy</span>
            <span className="skill">Pandas</span>
            <span className="skill">Scikit-Learn</span>
            <span className="skill">MongoDB</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
