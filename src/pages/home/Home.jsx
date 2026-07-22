import "./Home.css";
import heroimg from "../../assets/heroimg.jpg";
import RotatingText from "../../components/rotatingtext/RotatingText";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <>
      <div id="home" className="Container">
        <img src={heroimg} alt="Hero Image" className="hero-image" />
        <div className="hero-content">
          <h5>FRONT END WEB DEVELOPER</h5>
          <h1 className="hero-title">
            <RotatingText
              texts={["Designing", "Developing", "Creating"]}
              interval={2000}
            />
          </h1>
          <p>
            I build responsive, modern web applications using React, JavaScript,
            HTML, CSS and continuously expand my backend skills with Node.js,
            Express.js and MongoDB.
            <br></br>
            Turning your dreams into reality.
          </p>
          <ul className="social-links">
                      <li>
              <a
                href="https://github.com/Sawera-kiran"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/sawera-kiran"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61552654441923"
                target="_blank"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:sawerakiran96@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sawera__kiran/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
