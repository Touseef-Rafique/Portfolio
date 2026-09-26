import "../Styles/Styles.css";
import "../Styles/Animations.css";
import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useTilt } from "../hooks/useTilt";

const projectsData = [
  {
    badge: "MERN Stack",
    badgeClass: "mern-badge",
    cardClass: "stack-card",
    title: "MERN E-Commerce",
    desc: (
      <>
        Full-stack e-commerce platform built with <b>React, Node.js,
        Express.js and MongoDB</b>, featuring products, authentication,
        cart, wishlist and other commerce functionality.
      </>
    ),
    url: "https://mern-ecommerce-pink-seven.vercel.app/",
  },
  {
    badge: "Frontend",
    badgeClass: "frontend-badge",
    cardClass: "stack-card",
    title: "HULSoft",
    desc: (
      <>
        Responsive modern web application developed with <b>React</b>,
        focusing on clean UI, responsive layouts and smooth user
        experience.
      </>
    ),
    url: "https://hul-soft.vercel.app/",
  },
  {
    badge: "Frontend",
    badgeClass: "frontend-badge",
    cardClass: "stack-card",
    title: "The Walmox",
    desc: (
      <>
        Responsive e-commerce frontend built with <b>React</b> with
        product browsing, modern layouts and interactive UI components.
      </>
    ),
    url: "https://thewalmox-qxsq.vercel.app/",
  },
  {
    badge: "AI / Full Stack",
    badgeClass: "fullstack-badge",
    cardClass: "stack-card",
    title: "Nova AI",
    desc: (
      <>
        AI chatbot application built with <b>React, Node.js and AI APIs</b>,
        featuring a responsive interface and conversational AI experience.
      </>
    ),
    url: "https://nova-ai-chatbot-kappa.vercel.app/",
  },
];

const ProjectCard = ({ project, index }) => {
  const [revealRef, visible] = useScrollReveal();
  const tilt = useTilt(7);

  // Merge reveal ref and tilt ref
  const setRefs = (el) => {
    revealRef.current = el;
    tilt.ref.current = el;
  };

  const handleCardClick = () => {
    window.open(project.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={setRefs}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onClick={handleCardClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleCardClick();
        }
      }}
      className={`project-card tilt-card ${project.cardClass} reveal-scale ${
        visible ? "visible" : ""
      }`}
      style={{
        transitionDelay: `${(index % 3) * 0.12}s`,
        cursor: "pointer",
      }}
    >
      <div className={`card-badge ${project.badgeClass}`}>
        {project.badge}
      </div>

      <h3>{project.title}</h3>

      <p>{project.desc}</p>

      <span className="project-link">
        View Project ↗
      </span>
    </div>
  );
};

const Projects = () => {
  const [titleRef, titleVisible] = useScrollReveal();

  return (
    <section id="projects" className="projects-section">
      <div
        ref={titleRef}
        className={`reveal ${titleVisible ? "visible" : ""}`}
      >
        <div className="eyebrow">work</div>

        <h2 className="projects-title pt-1">
          Featured Projects
        </h2>
      </div>

      <p className="projects-subtitle">
        A curated selection of engineering and web solutions
      </p>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;