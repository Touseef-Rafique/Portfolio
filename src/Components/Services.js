import React from 'react';
import "../Styles/Styles.css";
import { FaCode, FaServer, FaWordpress, FaSearch } from 'react-icons/fa';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Professional <span>Services</span></h2>
        <div className="services-grid">

          <div className="service-card">
            <FaCode className="service-icon" />
            <h3>Frontend Architecture</h3>
            <p>Building semantic, exceptionally structured user interfaces using React.js, Tailwind, and Bootstrap for maximum user retention.</p>
          </div>

          <div className="service-card">
            <FaServer className="service-icon" />
            <h3>Backend Engineering</h3>
            <p>Constructing scalable REST APIs, secure server instances via Node/Express, and robust schemas with relational Mongoose models.</p>
          </div>

          <div className="service-card special-service">
            <FaWordpress className="service-icon" />
            <h3>WordPress Development</h3>
            <p>Deploying business-driven WooCommerce applications, theme overrides, and page builder mechanics tailored for high performance.</p>
          </div>

          <div className="service-card special-service">
            <FaSearch className="service-icon" />
            <h3>SEO & Performance Optimization</h3>
            <p>Auditing site speeds, deploying core web vitals adjustments, On-Page SEO parameters, and meta-structures to ensure business indexing.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;