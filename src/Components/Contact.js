

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram } from 'react-icons/fa';
import "../Styles/Styles.css";
import Footer from './Footer'; 

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h1 className="contact-title">📬 Get in Touch</h1>
          <p className="contact-subtitle">Feel free to reach out for collaborations or just to say hi!</p>

          <div className="contact-details">
            <p>
              <FaEnvelope className="icon" />
              <a href="mailto:youremail@example.com">touseefrafique2008@gmail.com</a>
            </p>

            <div className="social-links">
              <a href="https://github.com/touseef" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/touseef" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com/touseefrafique" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/touseefrafique" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className="pdf-download">
            <p>Download a PDF file</p>
            <button
              className="download-pdf-button"
              style={{ backgroundColor: 'rgb(199, 9, 9)', color: 'white' }}
            >
              Download PDF
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;


