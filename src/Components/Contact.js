

import React from 'react';
import {  FaGithub, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
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
              
              <a href="https://github.com/Touseef-Rafique" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
             <a href="https://wa.me/923401044550" target="_blank" rel="noreferrer">
                <FaWhatsapp />
              </a> 
              <a href="https://www.instagram.com/muhammadtouseefrafique?igsh=MTV4bTlvcXVwb242dA==" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579194996926" target="_blank" rel="noreferrer">
              <FaFacebook/>
              </a>
            </div>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;


