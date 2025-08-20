import "../Styles/Styles.css";
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title pt-5">My Projects</h2>
      <div className="projects-grid">

        <div className="project-card">
          <h3>KFC Clone</h3>
          <p>Responsive <b>Frontend</b> KFC website using <b>HTML, CSS, and JavaScript.</b></p>
        </div>

        <div className="project-card">
          <h3>Breakout Template</h3>
          <p>Responsive <b>Frontend</b> Breakout website using <b>Bootstrap.</b></p>
        </div>

        <div className="project-card">
          <h3>PriceOye Clone</h3>
          <p>Responsive <b>Frontend</b> PriceOye website using <b>Bootstrap.</b></p>
        </div>

        <div className="project-card">
          <h3>Guess the Number Game</h3>
          <p>A game for guessing a number in three tries using <b>JavaScript, HTML, and CSS.</b></p>
        </div>

        <div className="project-card">
          <h3>Income Tax Calculator</h3>
          <p>A frontend website that calculates income tax based on your salary using <b>JavaScript, HTML, and CSS.</b></p>
        </div>

        <div className="project-card">
          <h3>React Portfolio</h3>
          <p>A <b>Frontend</b> portfolio website using <b>React</b> which is fully responsive.</p>
        </div>

        <div className="project-card">
          <h3>BeeSol Company Website</h3>
          <p>A <b>Frontend</b> BeeSol website using <b>React</b> which is fully responsive.</p>
        </div>

        <div className="project-card">
          <h3>E-Commerce Layout (React)</h3>
          <p>A <b>Frontend</b> website in which product data is displayed dynamically using <b>React</b> (E-commerce layout).</p>
        </div>

        <div className="project-card">
          <h3>Fullstack Device Store</h3>
          <p>A <b>Fullstack</b> e-commerce website for devices like mobiles, tablets, and laptops using <b>React, Express.js, and Node.js.</b></p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
