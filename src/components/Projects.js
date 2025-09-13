import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

export default function Projects() {
  return (
    <section id="projects" className="projects-section py-5" data-aos="fade-up">
      <Container>
        <h2 className="section-title text-center mb-5">Projects</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="project-card">
              <Card.Body>
                <Card.Title>Quantum SVM Classifier</Card.Title>
                <Card.Text>
                  Built a QSVM classifier for Indian bay leaf dataset using hybrid
                  CNN + Quantum layers.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="project-card">
              <Card.Body>
                <Card.Title>Automation Bot</Card.Title>
                <Card.Text>
                  Developed bots for automating data scraping and API integrations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="project-card">
              <Card.Body>
                <Card.Title>Portfolio Website</Card.Title>
                <Card.Text>
                  Personal website to showcase my skills, projects, and resume.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
