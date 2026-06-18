



import React, { useState } from 'react';
import { FaGithub, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import "../Styles/Styles.css";
import Footer from './Footer'; 

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "923024635924"; // 👈 Your WhatsApp number without '+'
    const text = `*New Message from Portfolio*%0A%0A👤 Name: ${name}%0A📧 Email: ${email}%0A💬 Message: ${message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h1 className="contact-title">📬 Get in Touch</h1>
          <p className="contact-subtitle">Feel free to reach out for collaborations or just to say hi!</p>

          <div className="contact-details">
            <p>
              <FaEnvelope className="icon" />
              <a href="mailto:touseefrafique2008@gmail.com">touseefrafique2008@gmail.com</a>
            </p>

            <div className="social-links">
              <a href="https://github.com/Touseef-Rafique" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://wa.me/923024635924" target="_blank" rel="noreferrer">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/muhammadtouseefrafique?igsh=MTV4bTlvcXVwb242dA==" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579194996926" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* ✅ WhatsApp Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <textarea 
              rows="5" 
              placeholder="Your Message" 
              required 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;

