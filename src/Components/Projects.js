import "../Styles/Styles.css";
import "../Styles/Animations.css";
import React from 'react';
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useTilt } from "../hooks/useTilt";

const projectsData = [
  {
    badge: "WordPress & SEO",
    badgeClass: "",
    cardClass: "cms-card",
    title: "Corporate Business Platform",
    desc: "Designed a fully customized WordPress site optimized with technical SEO infrastructure for global reach and top ranks."
  },
  {
    badge: "WooCommerce",
    badgeClass: "",
    cardClass: "cms-card",
    title: "Automated E-Commerce Ecosystem",
    desc: "Built a high-converting WordPress e-store with seamless product management, caching mechanisms, and secure payments."
  },
  {
    badge: "MERN Stack",
    badgeClass: "mern-badge",
    cardClass: "stack-card",
    title: "Fullstack Device Store",
    desc: <>Engineered a secure commerce app with dynamic dashboard architecture, protected REST endpoints, and automated state pipelines using <b>React & Node.js.</b></>
  },
  {
    badge: "Frontend",
    badgeClass: "frontend-badge",
    cardClass: "stack-card",
    title: "BeeSol Company dummy Site",
    desc: <>Developed a responsive brand application utilizing <b>React</b> for smooth modular routing and layout execution.</>
  },
  {
    badge: "Frontend",
    badgeClass: "frontend-badge",
    cardClass: "stack-card",
    title: "Dynamic Data Layout Platform",
    desc: "Assembled an intuitive dashboard where real-time array streams are handled and mapped dynamically with optimized client states."
  },
  {
    badge: "Full stack",
    badgeClass: "fullstack-badge",
    cardClass: "stack-card",
    title: "E-commerece website",
    desc: "Coded an dummy e-commerce website using mern stack which cells mobiles phones use mongodb atlas as a database."
  }
];

const ProjectCard = ({ project, index }) => {
  const [revealRef, visible] = useScrollReveal();
  const tilt = useTilt(7);

  // Merge the reveal ref and the tilt ref onto the same node.
  const setRefs = (el) => {
    revealRef.current = el;
    tilt.ref.current = el;
  };

  return (
    <div
      ref={setRefs}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`project-card tilt-card ${project.cardClass} reveal-scale ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
    >
      <div className={`card-badge ${project.badgeClass}`}>{project.badge}</div>
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
    </div>
  );
};

const Projects = () => {
  const [titleRef, titleVisible] = useScrollReveal();

  return (
    <section id="projects" className="projects-section">
      <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''}`}>
        <div className="eyebrow"><span className="idx">// 02</span> work</div>
        <h2 className="projects-title pt-1">Featured Projects</h2>
      </div>
      <p className="projects-subtitle">A curated selection of engineering and CMS solutions</p>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;