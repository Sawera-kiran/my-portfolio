import "./Home.css";
import heroimg from "../../assets/heroimg.jpg";
import RotatingText from "../../components/rotatingtext/RotatingText";
import Button from "../../components/button/Button";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="hero-section">
      <img src={heroimg} alt="Hero Background" className="hero-image" />

      <div className="hero-overlay"></div>

      <div className="hero-glow glow-left"></div>
      <div className="hero-glow glow-right"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <span></span>
          Front-End Web Developer
        </div>

        <h1 className="hero-title">
          <RotatingText
            texts={[
              "Developing Interfaces",
              "Creating Solutions",
              "Building Products",
            ]}
            interval={2200}
          />
        </h1>

        <p className="hero-description">
          I craft modern, responsive and user-focused web applications using
          React, JavaScript, HTML and CSS, while continuously expanding my
          backend expertise with Node.js, Express.js and MongoDB.
        </p>

        <div className="hero-buttons">
          <Button text="View Projects" href="#projects" />

          <Button text="Let's Connect" href="#contact" />
        </div>

        <ul className="social-links">
          <li>
            <a
              href="https://github.com/Sawera-kiran"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </li>

          <li>
            <a
              href="https://linkedin.com/in/sawera-kiran"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="mailto:sawerakiran96@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/sawera__kiran/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
