import React from 'react';
import "../Styles/Styles.css";
import "../Styles/Animations.css";
import { FaCode, FaServer, FaWordpress, FaSearch } from 'react-icons/fa';
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useTilt } from "../hooks/useTilt";

const servicesData = [
  {
    Icon: FaCode,
    title: "Frontend Architecture",
    desc: "Building semantic, exceptionally structured user interfaces using React.js, Tailwind, and Bootstrap for maximum user retention.",
    special: false
  },
  {
    Icon: FaServer,
    title: "Backend Engineering",
    desc: "Constructing scalable REST APIs, secure server instances via Node/Express, and robust schemas with relational Mongoose models.",
    special: false
  },
  {
    Icon: FaWordpress,
    title: "WordPress Development",
    desc: "Deploying business-driven WooCommerce applications, theme overrides, and page builder mechanics tailored for high performance.",
    special: true
  },
  {
    Icon: FaSearch,
    title: "SEO & Performance Optimization",
    desc: "Auditing site speeds, deploying core web vitals adjustments, On-Page SEO parameters, and meta-structures to ensure business indexing.",
    special: true
  }
];

const ServiceCard = ({ service, index }) => {
  const [revealRef, visible] = useScrollReveal();
  const tilt = useTilt(6);
  const { Icon } = service;

  const setRefs = (el) => {
    revealRef.current = el;
    tilt.ref.current = el;
  };

  return (
    <div
      ref={setRefs}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className={`service-card tilt-card ${service.special ? 'special-service' : ''} reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <Icon className="service-icon icon-bounce" />
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
    </div>
  );
};

const Services = () => {
  const [titleRef, titleVisible] = useScrollReveal();

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div ref={titleRef} className={`reveal ${titleVisible ? 'visible' : ''}`}>
          <div className="eyebrow"> services</div>
          <h2 className="section-title">Professional <span>Services</span></h2>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;