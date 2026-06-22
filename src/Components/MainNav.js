import React, { useEffect, useRef, useState } from 'react';
import "../Styles/Styles.css";
import "../Styles/Animations.css";

const SECTIONS = ['home', 'about', 'projects', 'services', 'contact'];

export default function MainNav() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const wrapRef = useRef(null);
  const linkRefs = useRef({});

  const handleScroll = () => {
    setScrolled(window.scrollY > 30);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);

    for (let id of SECTIONS) {
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Move the underline indicator to sit under the active link.
  useEffect(() => {
    const activeEl = linkRefs.current[activeSection];
    const wrapEl = wrapRef.current;
    if (activeEl && wrapEl) {
      const wrapRect = wrapEl.getBoundingClientRect();
      const linkRect = activeEl.getBoundingClientRect();
      setIndicator({ left: linkRect.left - wrapRect.left, width: linkRect.width });
    }
  }, [activeSection, menuOpen]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="container-fluid">
          <p className="navbar-brand mb-0 fw-bold">
            <span className="brand-dim">touseef</span><span className="brand-accent">.dev</span>
            <span className="brand-cursor" />
          </p>

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

          <div
            className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
            id="navbarNav"
          >
            <div className="nav-list-wrap" ref={wrapRef}>
              <ul className="navbar-nav ms-auto me-5">
                {SECTIONS.map((sec, i) => (
                  <li className="nav-item mx-2" key={sec}>
                    <span
                      ref={(el) => (linkRefs.current[sec] = el)}
                      className={`nav-link nav-underline ${activeSection === sec ? 'active' : ''}`}
                      onClick={() => scrollToSection(sec)}
                    >
                         {/* <span className="nl-num">0{i}</span>   */}
                      {sec.charAt(0).toUpperCase() + sec.slice(1)} 
                    </span>
                  </li>
                ))}
              </ul>
              <span
                className="nav-indicator"
                style={{ left: indicator.left, width: indicator.width }}
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
    </>
  );
}