import React from "react";
import "../Styles/Styles.css";
import { useNavigate } from "react-router-dom"; 
const Resume = () => {
   const navigate = useNavigate();
  return (
    <div className="resume-container">
      {/* Hero Section */}
      <div className="resume-hero">
        <h1>M Touseef Rafique</h1>
        <h3>Full Stack MERN Developer</h3>
        <p>Email: touseefrafique2008@example.com | Phone: +92-302-4635924</p>
        <p>
           GitHub: https://github.com/Touseef-Rafique
        </p>
      </div>

      {/* Summary */}
      <div className="resume-section">
        <h2>Summary</h2>
        <p>
          Passionate and detail-oriented <strong>Full Stack MERN Developer</strong> with
          hands-on experience building dynamic, responsive, and scalable web
          applications. Skilled in <strong>React, Node.js, Express, and MongoDB</strong>,
          with a strong understanding of REST APIs, authentication, and
          database design. Adept at solving real-world problems with clean code
          and optimized solutions. Enthusiastic learner, quick adopter of new
          technologies, and a strong team player with excellent communication
          skills. Seeking to contribute expertise to a fast-growing organization
          while continuously enhancing skills.
        </p>
      </div>

      {/* Skills */}
      <div className="resume-section">
        <h2>Skills</h2>
        <ul>
          <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Responsive Design</li>
          <li><strong>Backend:</strong> Node.js, Express.js, REST APIs, Authentication, JWT</li>
          <li><strong>Database:</strong> MongoDB, Mongoose, Schema Design, Query Optimization</li>
          <li><strong>Tools & Platforms:</strong> Git, GitHub, Postman, VS Code, Netlify, Vercel, Heroku</li>
          <li><strong>Other Skills:</strong> Problem-solving, Debugging</li>
        </ul>
      </div>

      {/* Experience */}
      <div className="resume-section">
        <h2>Experience</h2>
        <div>
          <h3>Web Developer Intern – Excellence Code Solution</h3>
          <p><em>Jan 2024 – Jun 2024</em></p>
          <ul>
            <li>Built reusable React components for internal dashboards.</li>
            <li>Developed REST APIs using Express and integrated with MongoDB.</li>
            <li>Worked with a team in Agile sprints and contributed to daily standups.</li>
          </ul>
        </div>
        <div>
          <h3>Freelance Web Developer</h3>
          <p><em>2024 – Present</em></p>
          <ul>
            <li>Developed responsive portfolio websites for clients using React & CSS.</li>
            <li>Created authentication systems with JWT for small-scale applications.</li>
            <li>Deployed web apps on Netlify and Vercel for production.</li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="resume-section">
        <h2>Projects</h2>
        <div>
          <h3>🚀 E-commerce Website (MERN Stack)</h3>
          <p>
            Developed a fully functional e-commerce platform with user authentication
            (JWT + bcrypt), product management, shopping cart, and secure checkout.
            Integrated Multer for image uploads and MongoDB Atlas for cloud database.
            Implemented filtering, sorting, and category-based browsing.
          </p>
        </div>
        <div>
          <h3>📦 Portfolio Website (React + CSS)</h3>
          <p>
            Built a responsive personal portfolio with multiple sections (Home,
            About, Projects, Contact). Implemented smooth scrolling, sticky
            navigation, and project showcase. Deployed on Netlify for global
            accessibility.
          </p>
        </div>
        <div>
          <h3>🔑 Authentication System</h3>
          <p>
            Created a secure login/signup system with password hashing using bcrypt.
            Implemented session management and persistent authentication with JWT.
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="resume-section">
        <h2>Education</h2>
        <p>
          <strong>Intermediate in Computer Science</strong><br />
          Superior College | 2024 – 2026
        </p>
        <ul>
          <li>Specialized in Web Development & Databases</li>
          <li>Completed projects in React, Node.js, and MongoDB</li>
          <li>Actively participated in hackathons and coding competitions</li>
        </ul>
      </div>

      {/* Certifications */}
      <div className="resume-section">
        <h2>Certifications</h2>
        <ul>
          <li>MERN Stack  – PNY(Pakistan National Youth) Platform</li>
          <li>JavaScript Algorithms & Data Structures – freeCodeCamp</li>
          <li>React – The Complete Guide (Udemy)</li>
          <li>MongoDB University: M001 MongoDB Basics</li>
        </ul>
      </div>

      {/* Achievements */}
      <div className="resume-section">
        <h2>Achievements</h2>
        <ul>
          <li>Solved multiple coding problems </li>
          <li>Built and deployed 5+ real-world projects</li>
          <li>Awarded Best Project in my institute
          </li>
          <li>Recognized for outstanding work in final project</li>
        </ul>
      </div>

     

      {/* Languages */}
      <div className="resume-section">
        <h2>Languages</h2>
        <ul>
          <li>English – Fluent</li>
          <li>Urdu – Native</li>
          <li>Hindi – Intermediate</li>
        </ul>
      </div>

      {/* Interests */}
      <div className="resume-section">
        <h2>Interests</h2>
        <ul>
          <li>Exploring new technologies</li>
          <li>Writing tech blogs</li>
          <li>Playing cricket & chess</li>
          <li>Problem-solving challenges</li>
        </ul>
      </div>

      {/* References */}
      <div className="resume-section">
        <h2>References</h2>
        <p>Available upon request</p>
      </div>
       <div className="resume-section" style={{ textAlign: "center", marginTop: "20px" }}>
        <button
  className="back-button"
  onClick={() => {
    navigate("/");   // go to /
    window.scrollTo({ top: 0, behavior: "smooth" }); // force scroll to top
  }}
>
  ⬅ Back to Home
</button>

      </div>





    </div>
    
  );
};

export default Resume;
