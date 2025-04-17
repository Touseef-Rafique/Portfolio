import React from 'react';
import '../Styles/Styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Touseef Rafique. All rights reserved.</p>
        <p>Made with ❤️ using React</p>
      </div>
    </footer>
  );
};

export default Footer;
