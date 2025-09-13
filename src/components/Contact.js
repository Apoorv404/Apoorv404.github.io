import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-modern py-5" data-aos="fade-up">
      <Container>
        <h2 className="section-title text-center mb-5">Contact Me</h2>
        <Row className="align-items-center">
          <Col md={6} className="mb-5 mb-md-0">
            <h3 className="gradient-text mb-4">Let's Talk</h3>
            <p>
              I'm open to discussing AI/ML projects, collaborations, or partnership opportunities.
            </p>

            <div className="contact-item mt-4">
              <FaEnvelope className="icon" />
              <a href="mailto:jadhavapoorv2244@gmail.com">jadhavapoorv2244@gmail.com</a>
            </div>

            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <span>+91 8983441795</span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <span>Satara, Maharashtra, India</span>
            </div>
          </Col>

          <Col md={6}>
            <Form action="https://formspree.io/f/myzdvlka" method="POST" className="contact-form">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" className="contact-input" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter your email" className="contact-input" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} name="message" placeholder="Enter your message" className="contact-input" required />
              </Form.Group>

              <Button type="submit" className="btn-gradient">Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
