import { Container, Button } from "react-bootstrap";

export default function Hero() {
  return (
    <section id="hero" className="hero-section" data-aos="fade-up">
      <Container className="text-center">
        <div className="pfp-container mb-4">
          <img src="pfp.png" alt="Apoorv Avatar" className="pfp-img" />
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-name">Apoorv</span>
        </h1>
        <h2 className="hero-subtitle mb-3">
          Building Full Stacks Applications with Python
        </h2>
        <p className="hero-description">
          I'm a Computer Science and Engineering (AI & ML) student passionate about building full stack applications with experience in Python, Flask, React and databases.
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
            <span className="skill">Flask</span>
            <span className="skill">Jinja2</span>
            <span className="skill">Selenium</span>
            <span className="skill">BeautifulSoup</span>
            <span className="skill">SQL</span>
            <span className="skill">TensorFlow</span>
            <span className="skill">PyTorch</span>
            <span className="skill">NumPy</span>
            <span className="skill">Pandas</span>
            <span className="skill">Scikit-Learn</span>
            <span className="skill">React</span>
            <span className="skill">Bootstrap</span>
            <span className="skill">MongoDB</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
