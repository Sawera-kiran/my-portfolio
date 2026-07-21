import "./Contact.css";
import Button from "../../components/button/Button";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mfisb0u",
        "template_h8dqisq",
        form.current,
        "4Y31wWh-iN2iqtPuJ",
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error.text);
        },
      );
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-left">
        <h1 className="contact-heading">
          LET'S WORK TOGETHER ON YOUR NEXT PROJECT
        </h1>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="input-row">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
          </div>

          <textarea name="message" placeholder="Message" required></textarea>

          <Button className="contact-btn" text="Send Message" type="submit" />
        </form>
      </div>

      <div className="contact-right">
        <div className="contact-card">
          <h2>Let's Build Something Meaningful</h2>
          <p>
            I design and develop visually refined, responsive web experiences
            that combine aesthetics with performance. Whether you have an idea
            or a project in mind, let's bring it to life together.
          </p>

          <div className="contact-info">
            <p>Email: Sawerakiran96@email.com</p>
            <p>Location: Available Worldwide 🌍</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
