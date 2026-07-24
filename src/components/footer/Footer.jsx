import "./Footer.css";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-container">
        <div className="footer-brand">
          <h2>
            Sawera <span>Kiran</span>
          </h2>

          <p>
            Front-End Web Developer passionate about creating responsive,
            accessible and modern digital experiences.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#works">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/Sawera-kiran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>

          <a
            href="https://linkedin.com/in/sawera-kiran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin />
          </a>

          <a href="mailto:your@email.com">
            <FiMail />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Sawera Kiran. All Rights Reserved.</p>

        <a href="#home" className="back-top">
          <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
