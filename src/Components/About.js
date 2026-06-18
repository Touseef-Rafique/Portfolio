import React from 'react';
import "../Styles/Styles.css";

const About = () => {
  return (
    <section id="about" className="about-me">
      <h1 className="section-title pt-5">👋 About Me</h1>

      <div className="about-subsections">
        <div className="subsection">
          <h2>💼 Experience</h2>
          <ul className="text-list">
            <li><strong>Full Stack Web Developer</strong> – ECS Tech <span className="year">[2025]</span></li>
            <li><strong>Frontend Developer Intern</strong> – ECS Tech <span className="year">[2025]</span></li>
            <li><strong>Freelance Full-Stack & CMS Developer</strong> – Global Clients <span className="year">[Ongoing]</span></li>
          </ul>
        </div>

        <div className="subsection">
          <h2>🎓 Education & Certifications</h2>
          <ul className="text-list">
            <li><strong>Intermediate (I.C.S)</strong> – Superior College <span className="year">[2024–2026]</span></li>
            <li><strong>MERN Stack Development</strong> – PNY Platform</li>
            <li><strong>WordPress & Advanced SEO</strong> – Professional Specialization</li>
          </ul>
        </div>

        <div className="subsection">
          <h2>🛠 Technical Skills</h2>
          <div className="skills-group">
            <h3 className="skill-cat">Development Stack</h3>
            <ul className="skills-tags">
              <li>HTML5 / CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Bootstrap & Tailwind CSS</li>
            </ul>

            <h3 className="skill-cat">CMS & Optimization</h3>
            <ul className="skills-tags cms-tags">
              <li>WordPress E-Commerce</li>
              <li>Custom Theme Customization</li>
              <li>On-Page & Technical SEO</li>
              <li>Google Search Console</li>
              <li>Speed Optimization</li>
            </ul>

            <h3 className="skill-cat">Tools & Architecture</h3>
            <ul className="skills-tags tools-tags">
              <li>Git & GitHub</li>
              <li>RESTful APIs</li>
              <li>JWT Authentication</li>
              <li>Postman</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;