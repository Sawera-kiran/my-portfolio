import "./Work.css";
import Button from "../../components/button/Button";

import img1 from "../../assets/shoppingcart.png";
import img2 from "../../assets/ringoffice.png";
import img3 from "../../assets/photogallery.png";
import img4 from "../../assets/Servicesimage.jpg";
import img5 from "../../assets/Servicesimage.jpg";
import img6 from "../../assets/Servicesimage.jpg";

function Work() {
  const projects = [
    {
      image: img1,
      title: "Shopping Cart",
      link: "https://shopping-cart-sawera.netlify.app/", // 🔥 replace later
    },
    {
      image: img2,
      title: "Ring Office",
      link: "https://69d5355dbd4c1a111ed302dd--ring-office.netlify.app/",
    },
    {
      image: img3,
      title: "Photo Gallery",
      link: "https://sawera-kiran.github.io/FrontendPracticePack/Photo-Gallery/",
    },
    {
      image: img4,
      title: "Project 4",
      link: "#",
    },
    {
      image: img5,
      title: "Project 5",
      link: "#",
    },
    {
      image: img6,
      title: "Project 6",
      link: "#",
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