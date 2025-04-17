
import React, { useEffect, useState } from 'react';
import "../Styles/Styles.css";

function MainNav() {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about','projects','services', 'contact'];
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
          setActiveSection(section);
        }
      }
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <p className="navbar-brand mb-0 fw-bold">Touseef..</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item mx-2">
              <span
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
              >
                Home
              </span>
            </li>
            <li className="nav-item mx-2">
              <span
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                About
              </span>
            </li>
            <li className='nav-item mx-2'>
            <span
              className={`nav-link ${activeSection ==='projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
          Projects
            </span>
            </li>
            <li className='nav-item mx-2'>
            <span
              className={`nav-link ${activeSection ==='services' ? 'active' : ''}`}
              onClick={() => scrollToSection('services')}
            >
          Services
            </span>
            </li>
            <li className="nav-item mx-2">
  <span
    className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
    onClick={() => scrollToSection('contact')}
    type="button"
  >
    Contact
  </span>
</li>



          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;


