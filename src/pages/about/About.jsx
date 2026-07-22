import "./About.css";
import aboutimg from "../../assets/aboutimg.png";
import Button from "../../components/button/Button";

import {
  FiFolder,
  FiCode,
  FiMonitor,
} from "react-icons/fi";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-glow glow-one"></div>
      <div className="about-glow glow-two"></div>

      <div className="about-wrapper">

        {/* LEFT */}

        <div className="about-content">

          <span className="about-tag">
            ABOUT ME
          </span>

          <h2>
            Designing Modern
            <span> Digital Experiences</span>
          </h2>

          <p>
            I'm a passionate <strong>Front-End Web Developer</strong>
            who enjoys transforming ideas into elegant,
            responsive and high-performance web applications.
            I combine clean code with thoughtful design to
            build interfaces that are intuitive, accessible
            and visually engaging.
          </p>

          <p>
            Beyond coding, my passion for photography and
            visual aesthetics inspires the way I approach
            layouts, typography, colors and user experience.
            Every project is built with attention to detail,
            performance and scalability.
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
                <span>Specialized</span>
              </div>

            </div>

            <div className="stat-card">

              <div className="stat-icon">
                <FiMonitor />
              </div>

              <div>
                <h3>Responsive</h3>
                <span>UI Design</span>
              </div>

            </div>

          </div>

          <Button
            className="aboutButton"
            text="Let's Connect"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          />

        </div>

        {/* RIGHT */}

        <div className="about-image-container">

          <div className="image-border"></div>

          <div className="image-glow"></div>

          <img
            src={aboutimg}
            alt="Sawera Kiran"
            className="about-image"
          />
                  </div>

      </div>

    </section>
  );
}

export default About;