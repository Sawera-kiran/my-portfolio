import "./Services.css";
import { FiCode } from "react-icons/fi";
import { FiSmartphone } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiPlayCircle } from "react-icons/fi";
import { FiZap } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";
function Services() {
  return (
    <>
      <div id="services" className="Services">
          <div className="Services-content">
            <h1 className="Services-heading">Services</h1>
            <p className="Services-para">
              I specialize in crafting modern, responsive front-end experiences
              that combine performance with visual elegance.
            </p>
          </div>

          <div className="Services-container">
            <div className="Services-items">
              <div className="Services-icon">
                <FiCode />
              </div>
              <h2 className="Services-items-heding">Frontend Development</h2>
              <p className="Services-items-para">
                Building fast, scalable, and maintainable front-end applications
                using modern technologies like React, ensuring clean structure
                and performance optimization.
              </p>
            </div>
            <div className="Services-items">
              <div className="Services-icon">
                <FiSmartphone />
              </div>
              <h2 className="Services-items-heding">Responsive Web Design</h2>
              <p className="Services-items-para">
                Creating fully responsive layouts that adapt seamlessly across
                all devices, providing a consistent and user friendly
                experience.
              </p>
            </div>
            <div className="Services-items">
              <div className="Services-icon">
                <FiEye />
              </div>
              <h2 className="Services-items-heding">UI Aesthetic Design</h2>
              <p className="Services-items-para">
                Designing visually appealing interfaces with a strong focus on
                color harmony, spacing, and typography inspired by real-world
                visual aesthetics.
              </p>
            </div>
            <div className="Services-items">
              <div className="Services-icon">
                <FiPlayCircle />
              </div>
              <h2 className="Services-items-heding">
                Animations & Interactions
              </h2>
              <p className="Services-items-para">
                Enhancing user experience with smooth animations and
                micro-interactions that make interfaces feel dynamic and
                engaging.
              </p>
            </div>
            <div className="Services-items">
              <div className="Services-icon">
                <FiZap />
              </div>
              <h2 className="Services-items-heding">
                Performance Optimization
              </h2>
              <p className="Services-items-para">
                Optimizing websites for speed and efficiency, ensuring fast load
                times and smooth performance across all platforms.
              </p>
            </div>
            <div className="Services-items">
              <div className="Services-icon">
                <FiLayers />
              </div>
              <h2 className="Services-items-heding">
                Clean Code & Maintainability
              </h2>
              <p className="Services-items-para">
                Writing clean, reusable, and scalable code that ensures
                long-term maintainability and easy project expansion.
              </p>
            </div>
          </div>
      </div>
    </>
  );
}

export default Services;
