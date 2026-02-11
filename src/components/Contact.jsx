import { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form, Button, Alert, Fade } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("myzdvlka");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);

      if (formRef.current) {
        formRef.current.reset();
      }

      setTimeout(() => setShowSuccess(false), 5000);
    }

    if (Array.isArray(state.errors) && state.errors.length > 0) {
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    }
  }, [state.succeeded, state.errors]);

  return (
    <section id="contact" className="contact-modern py-5" data-aos="fade-up">
      <Container>
        <h2 className="section-title text-center mb-5">Message Me</h2>
        <Row className="align-items-center">
          {/* Left Info */}
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

          {/* Right Form */}
          <Col md={6}>
            <Fade in={showSuccess}>
              <div>
                {showSuccess && (
                  <Alert variant="success" transition={false}>
                    ✅ Thank you! Your message has been sent.
                  </Alert>
                )}
              </div>
            </Fade>

            <Fade in={showError}>
              <div>
                {showError && (
                  <Alert variant="danger" transition={false}>
                    ❌ Oops! Something went wrong. Try again.
                  </Alert>
                )}
              </div>
            </Fade>

            <Form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="contact-input"
                  required
                />
                {Array.isArray(state.errors) && (
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="contact-input"
                  required
                />
                {Array.isArray(state.errors) && (
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Enter your message"
                  className="contact-input"
                  required
                />
                {Array.isArray(state.errors) && (
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                )}
              </Form.Group>

              <Button
                type="submit"
                className="btn-gradient"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
