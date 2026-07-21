import "./Home.css";
import heroimg from "../../assets/heroimg.jpg";
import RotatingText from "../../components/rotatingtext/RotatingText";

function Home() {
  return (
    <>
      <div id="home" className="Container">
        <img src={heroimg} alt="Hero Image" className="hero-image" />
        <div className="hero-content">
          <h5>FRONT END WEB DEVELOPER</h5>
          <h1 className="hero-title">
            <RotatingText texts={["Designing", "Developing" , "Creating"]} interval={2000} />
          </h1>
          <p>
            I'm a Creative Designer and I make things work.
            <br></br>
            Turning your dreams into reality.
          </p>
          <ul className="social-links">
            <li>
              <a href="https://www.facebook.com/sawera.kiran.1111" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-behance"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
