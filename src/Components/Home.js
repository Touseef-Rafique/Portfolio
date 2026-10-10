import React, { useEffect, useState } from "react";
import "../Styles/Styles.css";
import "../Styles/Animations.css";
import { useNavigate } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";

const ROLES = ["Full-Stack Developer", "MERN Stack developer", "WordPress", "SEO", "React Developer", "Node.js Developer", "Web Designer", "UI/UX Designer"];
const STATS = [
  { to: 4, suffix: "+", label: "Live projects" },
  { to: 15, suffix: "+", label: "Technologies" },
  { to: 100, suffix: "%", label: "Responsive" },
];

// Typewriter that cycles through roles
function useTyping(words) {
  const [text, setText] = useState("");
  useEffect(() => {
    let w = 0, i = 0, del = false, t;
    const tick = () => {
      const word = words[w];
      i += del ? -1 : 1;
      setText(word.slice(0, i));
      let wait = del ? 35 : 75;
      if (!del && i === word.length) { del = true; wait = 1400; }
      else if (del && i === 0) { del = false; w = (w + 1) % words.length; wait = 350; }
      t = setTimeout(tick, wait);
    };
    tick();
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

function Counter({ to, suffix, label }) {
  const [ref, visible] = useScrollReveal({ threshold: 0.3 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let raf, start;
    const step = (ts) => {
      start = start || ts;
      const p = Math.min((ts - start) / 1400, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, to]);
  return (
    <div ref={ref} className="stat-box">
      <strong>{n}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

const Home = () => {
  const navigate = useNavigate();
  const role = useTyping(ROLES);

  return (
    <section id="home" className="hero-section">
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 ps-md-5 text-start">
            <h1 className="hero-title mt-4 fw-bold hero-anim-1">
              Hi, I am <br />
              <span className="gradient-text">Touseef Rafique</span>
            </h1>
            <h3 className="hero-subtitle hero-anim-2">
              {role}<span className="typed-caret" />
            </h3>
            <p className="mt-4 paragraph hero-anim-3">
              I am  web developer focused on building dynamic, scalable,
              and SEO-optimized websites . I specialize in the <b>MERN Stack</b> (MongoDB,
              Express.js, React, Node.js) alongside building  <b>WordPress ecosystems</b>.
            </p>

            <div className="hero-actions hero-anim-4">
              <button type="button" className="btn btn-primary-custom" onClick={() => navigate("/resume")}>
                View Resume
              </button>
              <button
                type="button"
                className="btn btn-secondary-custom"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact me
              </button>
            </div>

            <div className="hero-stats hero-anim-4">
              {STATS.map((s) => <Counter key={s.label} {...s} />)}
            </div>
          </div>

          <div className="col-md-6 d-flex justify-content-center mt-5 mt-md-0">
            <div className="img-wrapper hero-anim-img float-anim">
              <img src="/port.jpeg" alt="Muhammad Touseef Rafique" className="home-img" />
              <span className="orbit-chip c1">&lt;React /&gt;</span>
              <span className="orbit-chip c2">Node.js</span>
              <span className="orbit-chip c3">WordPress</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;