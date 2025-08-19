
import "../Styles/Styles.css";
import React from 'react';


const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title pt-5">My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project One</h3>
          <p>Responsive <b>Frontend</b> KFC  website using <b> HTML, CSS, and JavaScript. </b></p>
        </div>
        <div className="project-card">
          <h3>Project Two</h3>
          <p>Responsive <b>Frontend</b> Breakout website using <b> Bootstarp.</b></p>
        </div>
        <div className="project-card">
          <h3>Project Three</h3>
          <p>Responsive <b>Frontend</b> Priceoye website using <b> Bootstarp.</b></p>
        </div>
        <div className="project-card">
          <h3>Project Four</h3>
          <p>A game for guess a number in three in <b>Frontend</b>using <b>JavaScript,HTML and CSS</b></p>
        </div>
        <div className="project-card">
          <h3>Project Five</h3>
          <p>A frontend website that calculates income tax based on your salary using <b>JavaScript, HTML, and CSS</b>.</p>

        </div>
        <div className="project-card">
          <h3>Project Six</h3>
          <p>A <b>Frontend</b> portfolio website using <b>React</b> which is fully responsive.</p>
        </div>
        <div className="project-card">
          <h3>Project Seven</h3>
          <p>A <b>Frontend</b> BeeSol website using <b>React</b> which is fully responsive. </p>
        </div>
        <div className="project-card">
          <h3>Project Eight</h3>
          <p>A <b>Frontend</b> website using react in which data is come by front end using <b>React</b> a e-commarce layout. </p>
        </div>
        <div className="project-card">
          <h3>Project Nine</h3>
          <p>A <b>Fullstack</b> e-commare website of devices like mobiles,tablets and laptops etc using <b>React , Express.js and Node.js.</b></p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
