import "./Contact.css";
import Button from "../../components/button/Button";
import { useRef } from "react";
import { FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";
import { useState } from "react";
function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    const formData = new FormData(form.current);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });

        setTimeout(() => {
          setStatus({
            type: "",
            message: "",
          });
        }, 4000);
        form.current.reset();
      } else {
        setStatus({
          type: "error",
          message: result.message || "Failed to send message.",
        });

        setTimeout(() => {
          setStatus({
            type: "",
            message: "",
          });
        }, 4000);
        console.log(result);
      }
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });

      setTimeout(() => {
        setStatus({
          type: "",
          message: "",
        });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      {status.message && (
        <div className={`form-toast ${status.type}`}>
          {status.type === "success" ? "✅" : "❌"}
          <span>{status.message}</span>
        </div>
      )}
      <div className="contact-glow glow-one"></div>
      <div className="contact-glow glow-two"></div>

      <div className="contact-header">
        <div className="contact-badge">
          <span></span>
          LET'S CONNECT
        </div>

        <h2 className="contact-title">
          Looking for a<span> Front-End Developer?</span>
        </h2>

        <p className="contact-subtitle">
          Whether you have a project, internship, freelance opportunity or a
          full-time role, I'd love to collaborate and build modern, responsive
          and user-focused web experiences.
        </p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info-card">
          <h3>Let's Build Something Great Together</h3>

          <p>
            Feel free to reach out if you're looking for a Front-End Developer,
            have a project in mind, or simply want to connect. I'm always open
            to discussing new opportunities and exciting ideas.
          </p>

          <div className="info-list">
            <div className="info-item">
              <div className="info-icon">
                <FiMail />
              </div>

              <div>
                <h4>Email</h4>

                <span>Sawerakiran96@email.com</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FiLinkedin />
              </div>

              <div>
                <h4>LinkedIn</h4>

                <span>linkedin.com/in/your-profile</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FiGithub />
              </div>

              <div>
                <h4>GitHub</h4>

                <span>github.com/yourusername</span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FiMapPin />
              </div>

              <div>
                <h4>Location</h4>

                <span>Pakistan • Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-grid">
              <div className="input-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <div className="contact-button">
              <Button text="Send Message" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
