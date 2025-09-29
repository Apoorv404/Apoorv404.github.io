import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { FiExternalLink, FiGithub } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="projects-section py-5" data-aos="fade-up">
      <Container>
        <h2 className="section-title text-center mb-5">Projects</h2>
        <Row>
          {/* Quantum Image Classifier */}
          <Col md={4} className="mb-4">
            <Card className="project-card">
              <Card.Body>
                <Card.Title>Quantum Image Classifier</Card.Title>
                <Card.Text>
                  Built an image classifier for Indian bay leaf dataset using hybrid
                  CNN + Quantum Neural Network layers.
                </Card.Text>
                <div className="d-flex gap-2">
                  <Button
                    variant="link"
                    className="btn-project btn-sm"
                    href="https://apoorv404.github.io/Hybrid-CNN-QNN-Image-Classifier/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink className="me-1" /> Live Demo
                  </Button>
                  <Button
                    variant="link"
                    className="btn-project btn-sm"
                    href="https://github.com/Apoorv404/Hybrid-CNN-QNN-Image-Classifier"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="me-1" /> GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Workout Tracker */}
          <Col md={4} className="mb-4">
            <Card className="project-card">
              <Card.Body>
                <Card.Title>Workout Tracker</Card.Title>
                <Card.Text>
                  Developed a workout tracker using natural language processing
                  (via Nutritionix API) to parse user input about exercises.
                </Card.Text>
                <div className="d-flex gap-2">
                  <Button variant="link" className="btn-project-disabled btn-sm" disabled>
                    <FiExternalLink className="me-1" /> Live Demo
                  </Button>
                  <Button
                    variant="link"
                    className="btn-project btn-sm"
                    href="https://github.com/Apoorv404/workout-tracker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="me-1" /> GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Wi-Fi Speed Complaint Bot */}
          <Col md={4} className="mb-4">
            <Card className="project-card">
              <Card.Body>
                <Card.Title>Wi-Fi Speed Complaint Bot</Card.Title>
                <Card.Text>
                  Python script which tweets at your internet service provider if
                  your download/upload speeds are below promised range.
                </Card.Text>
                <div className="d-flex gap-2">
                  <Button variant="link" className="btn-project-disabled btn-sm" disabled>
                    <FiExternalLink className="me-1" /> Live Demo
                  </Button>
                  <Button
                    variant="link"
                    className="btn-project btn-sm"
                    href="https://github.com/Apoorv404/Wi-Fi-Speed-Complaint-Bot"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub className="me-1" /> GitHub
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
