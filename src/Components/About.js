import React from 'react';
import "../Styles/Styles.css";
import "../Styles/Animations.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

const devStack = ["HTML5 / CSS3", "JavaScript (ES6+)", "React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap & Tailwind CSS"];
const cmsStack = ["WordPress E-Commerce", "Custom Theme Customization", "On-Page & Technical SEO", "Google Search Console", "Speed Optimization"];
const toolsStack = ["Git & GitHub", "RESTful APIs", "JWT Authentication", "Postman"];

const About = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [expRef, expVisible] = useScrollReveal();
  const [eduRef, eduVisible] = useScrollReveal();
  const [skillsRef, skillsVisible] = useScrollReveal();

  return (
    <section id="about" className="about-me">
      <h1 ref={titleRef} className={`section-title pt-5 reveal ${titleVisible ? 'visible' : ''}`}>
        👋 About Me
      </h1>

      <div className="about-subsections">
        <div ref={expRef} className={`subsection reveal-left ${expVisible ? 'visible' : ''}`}>
          <h2>💼 Experience</h2>
          <ul className="text-list">
            <li><strong>Full Stack Web Developer</strong> – ECS Tech <span className="year">[2025]</span></li>
            <li><strong>Frontend Developer Intern</strong> – ECS Tech <span className="year">[2025]</span></li>
            <li><strong>Freelance Full-Stack & CMS Developer</strong> – Global Clients <span className="year">[Ongoing]</span></li>
          </ul>
        </div>

        <div ref={eduRef} className={`subsection reveal delay-1 ${eduVisible ? 'visible' : ''}`}>
          <h2>🎓 Education & Certifications</h2>
          <ul className="text-list">
            <li><strong>Intermediate (I.C.S)</strong> – Superior College <span className="year">[2024–2026]</span></li>
            <li><strong>MERN Stack Development</strong> – PNY Platform</li>
            <li><strong>WordPress & Advanced SEO</strong> – NAVTTC Certification from Government</li>
          </ul>
        </div>

        <div ref={skillsRef} className={`subsection reveal-right delay-2 ${skillsVisible ? 'visible' : ''}`}>
          <h2>🛠 Technical Skills</h2>
          <div className="skills-group">
            <h3 className="skill-cat">Development Stack</h3>
            <ul className="skills-tags">
              {devStack.map((skill, i) => (
                <li key={skill} className="skill-tag-anim" style={{ transitionDelay: `${i * 0.05}s` }}>
                  {skill}
                </li>
              ))}
            </ul>

            <h3 className="skill-cat">CMS & Optimization</h3>
            <ul className="skills-tags cms-tags">
              {cmsStack.map((skill, i) => (
                <li key={skill} className="skill-tag-anim" style={{ transitionDelay: `${i * 0.05}s` }}>
                  {skill}
                </li>
              ))}
            </ul>

            <h3 className="skill-cat">Tools & Architecture</h3>
            <ul className="skills-tags tools-tags">
              {toolsStack.map((skill, i) => (
                <li key={skill} className="skill-tag-anim" style={{ transitionDelay: `${i * 0.05}s` }}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;