import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer py-4">
      <Container className="text-center">
        <div className="social-links mb-3">
          <a href="https://github.com/apoorv404" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/apoorv-jadhav404" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://www.hackerrank.com/profile/Apoorv404" target="_blank" rel="noreferrer"><FaHackerrank /></a>
          <a href="https://leetcode.com/u/Apoorv404" target="_blank" rel="noreferrer"><SiLeetcode /></a>
          <a href="https://x.com/ApoorvJadhav" target="_blank" rel="noreferrer"><FaXTwitter /></a>
        </div>
        <p>© {new Date().getFullYear()} Apoorv Jadhav | Built with React & GitHub Pages</p>
      </Container>
    </footer>
  );
}
