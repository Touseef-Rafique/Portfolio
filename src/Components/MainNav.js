import React, { useEffect, useState } from 'react';
import "../Styles/Styles.css";

export default function MainNav() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false); // NEW

  const handleScroll = () => {
    const sections = ['home', 'about', 'projects', 'services', 'contact'];
    for (let id of sections) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 80 && rect.bottom >= 80) setActiveSection(id);
    }
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // CLOSE after click
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <p className="navbar-brand mb-0 fw-bold">Touseef..</p>

        {/* No data-bs-* here; React controls it */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto me-5">
            {['home', 'about', 'projects', 'services', 'contact'].map((sec) => (
              <li className="nav-item mx-2" key={sec}>
                <span
                  className={`nav-link ${activeSection === sec ? 'active' : ''}`}
                  onClick={() => scrollToSection(sec)}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
