import React from "react";
import "../Styles/Styles.css";
import "../Styles/Animations.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="hero-section">
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 ps-md-5 text-start">
            <h1 className="hero-title mt-4 fw-bold hero-anim-1">
              Hi, I am <br />
              <span className="gradient-text">Touseef Rafique</span>
            </h1>
            <h3 className="hero-subtitle hero-anim-2">Full-Stack Developer & WordPress Expert</h3>
            <p className="mt-4 paragraph hero-anim-3">
              I am a professional web developer focused on building dynamic, scalable, 
              and SEO-optimized web applications. I specialize in the <b>MERN Stack</b> 
              (MongoDB, Express.js, React, Node.js) alongside building high-converting 
              <b> WordPress ecosystems</b>.
            </p>

            <button
              type="button"
              className="btn btn-primary-custom mt-3 hero-anim-4"
              onClick={() => navigate("/resume")}
            >
              View Resume
            </button>
          </div>

          <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
            <div  className="img-wrapper hero-anim-img float-anim">
              <img
              style={{borderRadius:"150px"}}
                src="/port.jpeg"
                alt="Muhammad Touseef Rafique"
                className="img-fluid home-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;