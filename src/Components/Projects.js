import "../Styles/Styles.css";
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title pt-5">Featured Projects</h2>
      <p className="projects-subtitle">A curated selection of engineering and CMS solutions</p>
      
      <div className="projects-grid">
        {/* New Premium WordPress Projects added at the top */}
        <div className="project-card cms-card">
          <div className="card-badge">WordPress & SEO</div>
          <h3>Corporate Business Platform</h3>
          <p>Designed a fully customized WordPress site optimized with technical SEO infrastructure for global reach and top ranks.</p>
        </div>

        <div className="project-card cms-card">
          <div className="card-badge">WooCommerce</div>
          <h3>Automated E-Commerce Ecosystem</h3>
          <p>Built a high-converting WordPress e-store with seamless product management, caching mechanisms, and secure payments.</p>
        </div>

        <div className="project-card stack-card">
          <div className="card-badge mern-badge">MERN Stack</div>
          <h3>Fullstack Device Store</h3>
          <p>Engineered a secure commerce app with dynamic dashboard architecture, protected REST endpoints, and automated state pipelines using <b>React & Node.js.</b></p>
        </div>

        <div className="project-card stack-card">
          <div className="card-badge frontend-badge">Frontend</div>
          <h3>BeeSol Company Corporate Site</h3>
          <p>Developed a responsive brand application utilizing <b>React</b> for smooth modular routing and layout execution.</p>
        </div>

        <div className="project-card stack-card">
          <div className="card-badge frontend-badge">Frontend</div>
          <h3>Dynamic Data Layout Platform</h3>
          <p>Assembled an intuitive dashboard where real-time array streams are handled and mapped dynamically with optimized client states.</p>
        </div>

        <div className="project-card stack-card">
          <div className="card-badge utility-badge">Utility</div>
          <h3>Algorithmic Tax Architecture</h3>
          <p>Coded an isolated micro-utility website utilizing functional JavaScript models to parse real-time tax calculation structures instantly.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;