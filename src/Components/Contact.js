import React, { useState } from 'react';
import { FaGithub, FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import "../Styles/Styles.css";
import "../Styles/Animations.css";
import Footer from './Footer';
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useMagnetic } from "../hooks/useMagnetic";

const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/Touseef-Rafique" },
  { Icon: FaWhatsapp, href: "https://wa.me/923024635924" },
  { Icon: FaInstagram, href: "https://www.instagram.com/muhammadtouseefrafique?igsh=MTV4bTlvcXVwb242dA==" },
  { Icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61579194996926" }
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sectionRef, sectionVisible] = useScrollReveal();
  const submitBtn = useMagnetic(0.15);

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "923024635924"; // 👈 Your WhatsApp number without '+'
    const text = `*New Message from Portfolio*%0A%0A👤 Name: ${name}%0A📧 Email: ${email}%0A💬 Message: ${message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  // Lightweight ripple effect on the submit button (no extra dependency needed)
  const createRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - diameter / 2}px`;
    circle.style.top = `${e.clientY - rect.top - diameter / 2}px`;
    circle.classList.add("ripple-circle");
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  return (
    <>
      <section id="contact" className="contact-section" ref={sectionRef}>
        <div className={`contact-container reveal ${sectionVisible ? 'visible' : ''}`}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="idx">// 04</span> contact
          </div>
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">Feel free to reach out for collaborations or just to say hi!</p>

          <div className="contact-details">
            <p>
              <FaEnvelope className="icon icon-bounce" />
              <a href="mailto:touseefrafique2008@gmail.com">touseefrafique2008@gmail.com</a>
            </p>

            <div className="social-links">
              {socialLinks.map(({ Icon, href }, i) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-bounce"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <Icon />
                </a>
              ))}
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
            <button
              ref={submitBtn.ref}
              type="submit"
              className="btn-ripple"
              onClick={createRipple}
              onMouseMove={submitBtn.onMouseMove}
              onMouseLeave={submitBtn.onMouseLeave}
            >
              Send
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;