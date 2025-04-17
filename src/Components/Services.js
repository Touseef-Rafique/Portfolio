import React from 'react';
import "../Styles/Styles.css";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">My <span>Services</span></h2>
        <div className="services-grid">

          <div className="service-card">
            <i className="fas fa-code service-icon"></i>
            <h3>Frontend Development</h3>
            <p>
              Crafting responsive and interactive interfaces using React, HTML, CSS, and JavaScript to deliver great user experiences.
            </p>
          </div>

          <div className="service-card">
            <i className="fas fa-server service-icon"></i>
            <h3>Backend Development</h3>
            <p>
              Building robust backend APIs and logic using Node.js, Express.js, and MongoDB with clean and secure architecture.
            </p>
          </div>

          <div className="service-card">
            <i className="fas fa-mobile-alt service-icon"></i>
            <h3>Responsive Design</h3>
            <p>
              Ensuring your website looks perfect on all devices with fluid layouts, flexible images, and media queries.
            </p>
          </div>

          <div className="service-card">
            <i className="fas fa-bug service-icon"></i>
            <h3>Debugging & Optimization</h3>
            <p>
              Fixing bugs, optimizing performance, and improving code for speed, maintainability, and scalability.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
