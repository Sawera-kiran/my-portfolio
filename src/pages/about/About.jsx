import "./About.css";
import aboutimg from "../../assets/aboutimg.PNG";
import Button from "../../components/button/Button";
function About() {
  return (
    <>
      <div id="about" className="about">
        <div className="about-content">
          <h1 className="about-heding">About Me</h1>
          <p className="about-para">
            I'm a Front-End Web Developer with a keen eye for aesthetics,
            blending technical precision with visual creativity. My passion for
            photography especially capturing nature and beautiful landscapes
            deeply influences how I design interfaces, helping me create
            visually balanced and engaging user experiences. I focus on crafting
            clean, responsive websites that not only function flawlessly but
            also feel intuitive and visually compelling.
          </p>
          <p className="about-para">
            With a strong sense of color palettes, typography, and smooth
            animations, I build interfaces that are both modern and
            aesthetically refined, ensuring every detail contributes to a
            cohesive and eye catching design.
          </p>
          <Button
            className="aboutButton"
            text="Contact Me"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>

        <div className="about-img">
          <img src={aboutimg} alt="About Me" className="aboutimage" />
        </div>
      </div>
    </>
  );
}

export default About;
