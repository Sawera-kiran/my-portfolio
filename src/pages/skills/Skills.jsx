import "./Skills.css";

import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiVite,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const skillCategories = [
  {
    title: "Frontend Development",

    skills: [
      {
        icon: <FaReact />,
        name: "React",
        color: "#61DAFB",
      },

      {
        icon: <SiJavascript />,
        name: "JavaScript",
        color: "#F7DF1E",
      },

      {
        icon: <SiHtml5 />,
        name: "HTML5",
        color: "#E34F26",
      },

      {
        icon: <SiCss />,
        name: "CSS3",
        color: "#1572B6",
      },
    ],
  },

  {
    title: "Backend Development",

    skills: [
      {
        icon: <FaNodeJs />,
        name: "Node.js",
        color: "#3C873A",
      },

      {
        icon: <SiExpress />,
        name: "Express.js",
        color: "#ffffff",
      },

      {
        icon: <SiMongodb />,
        name: "MongoDB",
        color: "#47A248",
      },
    ],
  },

  {
    title: "Development Tools",

    skills: [
      {
        icon: <FaGitAlt />,
        name: "Git",
        color: "#F05032",
      },

      {
        icon: <FaGithub />,
        name: "GitHub",
        color: "#ffffff",
      },

      {
        icon: <VscVscode />,
        name: "VS Code",
        color: "#007ACC",
      },

      {
        icon: <FaFigma />,
        name: "Figma",
        color: "#A259FF",
      },

      {
        icon: <SiPostman />,
        name: "Postman",
        color: "#FF6C37",
      },

      {
        icon: <SiVite />,
        name: "Vite",
        color: "#646CFF",
      },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-glow glow-left"></div>
      <div className="skills-glow glow-right"></div>

      <div className="skills-wrapper">
        <div className="skills-header">
          <span className="skills-tag">TECH STACK</span>

          <h2>
            Technical <span>Skills</span>
          </h2>

          <p>
            Technologies, frameworks and tools I use to build modern, scalable
            and responsive web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skills-card" key={index}>
              <div className="card-glow"></div>

              <h3>{category.title}</h3>

              <div className="chips-container">
                {category.skills.map((skill, i) => (
                  <div className="skill-chip" key={i}>
                    <div
                      className="chip-icon"
                      style={{
                        color: skill.color,
                      }}
                    >
                      {skill.icon}
                    </div>

                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
