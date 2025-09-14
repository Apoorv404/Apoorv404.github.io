import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function AppNavbar({ setActiveSection }) {
  return (
    <Navbar expand="lg" variant="dark" className="navbar-custom" sticky="top">
      <Container>
        <Navbar.Brand href="#" className="navbar-brand-custom" onClick={() => setActiveSection("home")}>
          Apoorv
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={() => setActiveSection("home")} className="nav-link-custom">Home</Nav.Link>
            <Nav.Link onClick={() => setActiveSection("projects")} className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link onClick={() => setActiveSection("contact")} className="nav-link-custom">Contact</Nav.Link>
            <Nav.Link onClick={() => setActiveSection("about")} className="nav-link-custom">About</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
