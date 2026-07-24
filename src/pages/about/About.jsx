import "./About.css";
import aboutimg from "../../assets/aboutimg.png";
import Button from "../../components/button/Button";

import { FiFolder, FiCode, FiMonitor } from "react-icons/fi";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-glow glow-one"></div>
      <div className="about-glow glow-two"></div>

      <div className="about-wrapper">
        {/* LEFT */}

        <div className="about-content">
          <span className="about-tag">ABOUT ME</span>

          <h2>
            Designing Modern
            <span> Digital Experiences</span>
          </h2>

          <p>
            I'm a Front-End Web Developer with professional experience building responsive, accessible, and user-focused web applications. I enjoy turning ideas into clean, modern interfaces using React, JavaScript, HTML, and CSS while continuously expanding my backend knowledge with Node.js, Express.js, and MongoDB.
          </p>

          <p>
            Beyond coding, my passion for photography and visual aesthetics
            inspires the way I approach layouts, typography, colors and user
            experience.I enjoy improving user experience through thoughtful layouts, reusable components, and clean, maintainable code. I believe that great interfaces should not only look modern but also be fast, responsive, and easy to use across all devices.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <FiFolder />
              </div>

              <div>
                <h3>10+</h3>
                <span>Projects</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FiCode />
              </div>

              <div>
                <h3>React</h3>
                <span>Modern UI Development</span>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">
                <FiMonitor />
              </div>

              <div>
                <h3>Responsive</h3>
                <span>Web Interfaces</span>
              </div>
            </div>
          </div>

          <Button text="Let's Connect" href="#contact" />
        </div>

        {/* RIGHT */}

        <div className="about-image-container">
          <div className="image-border"></div>

          <div className="image-glow"></div>

          <img src={aboutimg} alt="Sawera Kiran" className="about-image" />
        </div>
      </div>
    </section>
  );
}

export default About;
