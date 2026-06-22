import React from 'react';
import '../Styles/Styles.css';
import '../Styles/Animations.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer = () => {
  const [ref, visible] = useScrollReveal({ threshold: 0.1 });

  return (
    <footer ref={ref} className={`footer reveal ${visible ? 'visible' : ''}`}>
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Touseef Rafique. All rights reserved.</p>
        <p>Made with <span className="heart">♥</span> using React</p>
      </div>
    </footer>
  );
};

export default Footer;