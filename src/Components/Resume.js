import React from "react";
import "../Styles/Styles.css";
import "../Styles/Animations.css";
import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useMagnetic } from "../hooks/useMagnetic";

const ResumeSection = ({ children, delayClass = "" }) => {
  const [ref, visible] = useScrollReveal();
  return (
    <div ref={ref} className={`resume-section reveal ${delayClass} ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

const Resume = () => {
  const navigate = useNavigate();
  const backBtn = useMagnetic(0.2);

  return (
    <div className="resume-container">
      <div className="resume-hero hero-anim-1">
        <h1>M. Touseef Rafique</h1>
        <h3>Full-Stack MERN Developer & CMS Expert</h3>
        <p>Email: touseefrafique2008@gmail.com | Phone: +92-302-4635924</p>
        <p>GitHub: github.com/Touseef-Rafique</p>
      </div>

      <ResumeSection>
        <h2>Executive Summary</h2>
        <p>
          Highly adaptive and business-centric <strong>Full-Stack Developer</strong> specialized in the <strong>MERN Stack, WordPress engineering, and Technical SEO</strong>. Proven expertise in merging custom programmatic architectures with robust content management engines to deliver fast, responsive, and discoverable software solutions.
        </p>
      </ResumeSection>

      <ResumeSection delayClass="delay-1">
        <h2>Technical Core</h2>
        <ul>
          <li><strong>Engineering Stack:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, Express.js</li>
          <li><strong>Data & Management:</strong> MongoDB, Mongoose ODM, REST Architecture, JWT Web Tokenization</li>
          <li><strong>CMS & Marketing:</strong> WordPress Core, WooCommerce, On-Page SEO, Keyword Strategy, Web Vitals</li>
          <li><strong>Workflows:</strong> Git, Postman API Testing, Agile Sprints, Vercel/Netlify Deployment</li>
        </ul>
      </ResumeSection>

      <ResumeSection delayClass="delay-2">
        <h2>Professional Experience</h2>
        <div>
          <h3>Full Stack & CMS Developer – Freelance</h3>
          <p><em>2024 – Present</em></p>
          <ul>
            <li>Engineered modern responsive web apps and optimized business visibility using advanced SEO configurations.</li>
            <li>Configured customized WordPress architectures yielding streamlined content workflows for corporate entities.</li>
          </ul>
        </div>
        <div>
          <h3>Web Developer Associate / Intern – Excellence Code Solution</h3>
          <p><em>Jan 2024 – Jun 2024</em></p>
          <ul>
            <li>Engineered responsive structural components in React.js and tested modular endpoints through Node and Express pipelines.</li>
          </ul>
        </div>
      </ResumeSection>

      <ResumeSection delayClass="delay-3">
        <h2>Education & Credentials</h2>
        <p>
          <strong>Intermediate in Computer Science (I.C.S)</strong><br />
          Superior College | 2024 – 2026
        </p>
        <ul className="mt-2">
          <li>MERN Stack Mastery Training – PNY Platform</li>
          <li>WordPress CMS and SEO Strategy Specialization</li>
          <li>Algorithms and Structure Certification – freeCodeCamp</li>
        </ul>
      </ResumeSection>

      <div className="resume-section" style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          ref={backBtn.ref}
          className="back-button btn-ripple"
          onMouseMove={backBtn.onMouseMove}
          onMouseLeave={backBtn.onMouseLeave}
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          ⬅ Back to Portfolio
        </button>
      </div>
    </div>
  );
};

export default Resume;