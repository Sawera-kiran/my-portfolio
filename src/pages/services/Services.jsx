import "./Services.css";

import {
  FiCode,
  FiSmartphone,
  FiEye,
  FiPlayCircle,
  FiZap,
  FiLayers,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    icon: <FiCode />,
    title: "Frontend Development",
    description:
      "Building modern and maintainable React applications with reusable components and optimized performance.",
  },
  {
    icon: <FiSmartphone />,
    title: "Responsive Web Design",
    description:
      "Creating fully responsive layouts that deliver a seamless experience across desktop, tablet and mobile devices.",
  },
  {
    icon: <FiEye />,
    title: "UI / UX Design",
    description:
      "Designing visually appealing user interfaces with a strong focus on usability, typography and modern aesthetics.",
  },
  {
    icon: <FiPlayCircle />,
    title: "Animations & Interactions",
    description:
      "Creating smooth animations and micro-interactions that make interfaces feel engaging and professional.",
  },
  {
    icon: <FiZap />,
    title: "Performance Optimization",
    description:
      "Optimizing websites for faster loading, better Core Web Vitals and excellent user experience.",
  },
  {
    icon: <FiLayers />,
    title: "Clean Code",
    description:
      "Writing clean, reusable and scalable code following modern frontend development best practices.",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-bg one"></div>
      <div className="services-bg two"></div>

      <div className="services-wrapper">
        <div className="services-header">
          <span className="services-tag">WHAT I OFFER</span>

          <h2>
            Services That Bring <span>Ideas To Life</span>
          </h2>

          <p>
            I build responsive, modern and high-performance web applications
            focused on exceptional user experience, clean architecture and
            maintainable code.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-card-glow"></div>

              <div className="service-icon">{service.icon}</div>

              <div className="service-content">
                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>

              <div className="service-arrow">
                <FiArrowUpRight />
              </div>
            </div>
          ))}{" "}
        </div>
      </div>
    </section>
  );
}

export default Services;
