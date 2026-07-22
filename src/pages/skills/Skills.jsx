import React from "react";
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
const frontendSkills = [
  {
    name: "React",
    icon: <FaReact />,
    level: "90%",
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    level: "92%",
    color: "#F7DF1E",
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    level: "98%",
    color: "#007ACC",
  },
  {
    name: "CSS3",
    icon: <SiCss />,
    level: "96%",
    color: "#1572B6",
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    level: "75%",
    color: "#3C873A",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    level: "72%",
    color: "#ffffff",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    level: "74%",
    color: "#47A248",
  },
];

const tools = [
  {
    name: "Git",
    icon: <FaGitAlt />,
    level: "90%",
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    level: "90%",
    color: "#ffffff",
  },
  {
    name: "VS Code",
    icon: <VscVscode />,
    level: "95%",
    color: "#007ACC",
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    level: "82%",
    color: "#A259FF",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    level: "88%",
    color: "#646CFF",
  },
];

const SkillCard = ({ title, data }) => {
  return (
    <div className="skill-card">
      <div className="card-glow"></div>

      <div className="skill-heading">
        <h3>{title}</h3>
      </div>

      <div className="skills-list">
        {data.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-top">
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>

              <div className="skill-info">
                <h4>{skill.name}</h4>
                <span>{skill.level}</span>
              </div>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: skill.level,
                  background: skill.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-bg-circle circle-one"></div>
      <div className="skills-bg-circle circle-two"></div>

      <div className="container">
        <div className="section-title">
          <span>TECH STACK</span>

          <h2>
            Technical Skills
          </h2>

          <p>
            My expertise spans modern frontend development, backend fundamentals
            and professional development tools used to build responsive,
            scalable and high-performance web applications.
          </p>
        </div>

        <div className="skills-grid">
          <SkillCard title="Frontend Development" data={frontendSkills} />

          <SkillCard title="Backend Development" data={backendSkills} />

          <SkillCard title="Development Tools" data={tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
