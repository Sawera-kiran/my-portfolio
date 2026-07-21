import "./ContactSection.css";
import Button from "../button/Button";
function ContactSection() {
  return (
    <>
      <div className="ContactSection">
      
        <h2 className="ContactSection-heading">CRAFTING MODERN, VISUALLY REFINED AND RESPONSIVE WEB INTERFACES WITH PRECISION AND CREATIVITY</h2>
        <Button
          className="ContactSection-btn"
          text="Contact Me"
          onClick={() => console.log("Contact clicked")}
        />
      </div>
    </>
  );
}

export default ContactSection;
