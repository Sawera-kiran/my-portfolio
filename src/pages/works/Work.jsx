import "./Work.css";
import Button from "../../components/button/Button";

import img4 from "../../assets/shoppingcart.png";
import img3 from "../../assets/photogallery.png";
import img1 from "../../assets/shopo-web.png";
import img2 from "../../assets/auth-app.png";


function Work() {
  const projects = [
    {
      image: img1,
      title: "Shopo Website",
      link: " https://shopo-web.netlify.app/", // 🔥 replace later
    },
    {
      image: img2,
      title: "Authentication",
      link: "https://sawera-auth-app.netlify.app/",
    },
    {
      image: img3,
      title: "Photo Gallery",
      link: "https://sawera-kiran.github.io/FrontendPracticePack/Photo-Gallery/",
    },
    {
      image: img4,
      title: "Shopping Cart",
      link: "https://shopping-cart-sawera.netlify.app/",
    },
  ];

  return (
    <div id="works" className="work">
      <div className="work-content">
        <h1 className="work-heading">Portfolio</h1>

        <p className="work-para">
          I'm a Front-End Developer and I build aesthetic, responsive web
          experiences that blend performance with visual elegance.
        </p>

        <p className="work-para">
          Turning ideas into visually engaging and functional digital products.
        </p>

        <Button
          className="work-btn"
          text="My Works"
          onClick={() => {
            document
              .getElementById("works")
              .scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="work-item"
          >
            <img src={project.image} alt={project.title} />

            <div className="overlay">
              <h3>{project.title}</h3>
              <p>View Project</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Work;