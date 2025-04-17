
import React from 'react';
import "../Styles/Styles.css";

const About = () => {
  return (
    <section id="about" className="about-me">
      <h1 className="section-title pt-5">👋 About Me</h1>

      <div className="about-subsections">
        
        <div className="subsection">
          <h2>💼 Experience</h2>
          <ul className="text">
            <li><strong>Frontend Developer Intern</strong> – ECS (Excellence Code Solution) Tech <span className="year">[2025]</span></li>
            <li><strong>Freelance Web Developer</strong> – Personal Projects <span className="year">[Ongoing]</span></li>
            <li><strong>Full Stack Web Developer</strong> – ECS Tech <span className="year">[2025]</span></li>
          </ul>
        </div>

        
        <div className="subsection">
          <h2>🎓 Education</h2>
          <ul className="text">
            <li><strong>Intermediate (I.C.S)</strong> – Superior College <span className="year">[2024–2026]</span></li>
            <li><strong>University Student</strong> – Currently Pursuing</li>
            <li><strong>Full Stack Web Development</strong> – PNY (Pakistan National Youth)</li>
            <li><strong>Self-Taught</strong> – Full Stack Web Development (Online)</li>
          </ul>
        </div>

      
        <div className="subsection">
          <h2>🛠 Skills</h2>
          <div className="skills-group">
            <h3 className="t">Frontend</h3>
            <ul className="skills">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript (ES6+)</li>
              <li>Bootstrap</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Responsive Design</li>
            </ul>

            <h3 className="t">Backend</h3>
            <ul className="skills">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
              <li>Authentication (JWT, bcrypt)</li>
            </ul>

            <h3 className="t">Database</h3>
            <ul className="skills">
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ul>

            <h3 className="t">Tools & Technologies</h3>
            <ul className="skills">
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>MongoDB Atlas</li>
            </ul>

            <h3 className="t">Soft Skills</h3>
            <ul className="skills">
              <li>Problem Solving</li>
              <li>Project Management</li>
              <li>Self Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


