import React from "react";
import "../Styles/Styles.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "60px",
        background: "rgb(5, 5, 61)",
      }}
    >
      <div className="container mb-5">
        <div className="row align-items-center">
          <div className="col-md-6 ps-5">
            <h1 style={{ color: "white" }} className="mt-4 fw-bold">
              Hi.. I am <br />
              WEB dEVELOPER
            </h1>
            <p className="mt-4 paragraph" style={{ color: "#ddd" }}>
              I am a professional web developer focused on building dynamic and
              responsive websites. I specialize in both front-end and back-end
              development, working with technologies like <br />
              <b>HTML, CSS, JavaScript, React, Express.js, Node.js, and
              MongoDB.</b>
              <br /> I enjoy solving problems, learning new tools, and creating
              seamless user experiences.
            </p>

            {/* ✅ Navigate to Resume Page */}
            <button
              type="button"
              className="btn mt-3"
              onClick={() => navigate("/resume")}
            >
              View Resume
            </button>
          </div>

          <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
            <img
              src="/meee.jpg"
              alt="Muhammad Touseef Rafique"
              className="img-fluid home-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
