import "./Work.css";

import img1 from "../../assets/shopo-web.png";
import img2 from "../../assets/auth-app.png";
import img3 from "../../assets/photogallery.png";
import img4 from "../../assets/shoppingcart.png";

import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    image: img1,
    title: "ShopO E-Commerce",
    category: "React Application",
    description:
      "Modern responsive e-commerce website featuring dynamic product filtering, shopping cart functionality and premium UI design.",

    tech: ["React", "JavaScript", "CSS"],

    link: "https://shopo-web.netlify.app/",
  },

  {
    image: img2,
    title: "Authentication System",
    category: "MERN Project",
    description:
      "Secure authentication system with login, registration, validation and MongoDB integration.",

    tech: ["React", "Node", "MongoDB"],

    link: "https://sawera-auth-app.netlify.app/",
  },

  {
    image: img3,
    title: "Photo Gallery",
    category: "Frontend Project",
    description:
      "Interactive image gallery with responsive layout, filtering and modern hover animations.",

    tech: ["HTML", "CSS", "JavaScript"],

    link: "https://sawera-kiran.github.io/FrontendPracticePack/Photo-Gallery/",
  },

  {
    image: img4,
    title: "Shopping Cart",
    category: "React Project",
    description:
      "Shopping cart built with Context API featuring product management and responsive user experience.",

    tech: ["React", "Context API", "CSS"],

    link: "https://shopping-cart-sawera.netlify.app/",
  },
];

function Work() {
  return (
    <section className="work-section" id="works">
      <div className="work-glow glow-left"></div>
      <div className="work-glow glow-right"></div>

      <div className="work-wrapper">
        <div className="work-header">
          <span className="work-tag">FEATURED PROJECTS</span>

          <h2>
            Selected <span>Projects</span>
          </h2>

          <p>
            A collection of projects demonstrating my expertise in React
            development, responsive web design, API integration and modern
            frontend engineering.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />

                <div className="project-overlay">
                  <div className="project-icon">
                    <FiExternalLink />
                  </div>
                </div>
              </div>

              <div className="project-content">
                <span className="project-category">{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item, i) => (
                    <span key={i} className="tech-badge">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <span className="live-demo">Live Demo</span>

                  <FiArrowUpRight className="arrow" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
