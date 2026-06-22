import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ import router

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import MainNav from "./Components/MainNav";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Resume from "./Components/Resume";

function App() {
  const glowRef = useRef(null);

  // Ambient cursor glow — direct DOM update, no re-renders on every mousemove.
  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const onMove = (e) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div className="cursor-glow" ref={glowRef} />
      <MainNav /> {/* ✅ Navigation stays on all pages */}

      <Routes>
        {/* ✅ Home page with sections */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Services />
              <Contact />
            </>
          }
        />

        {/* ✅ Separate Resume Page */}
        <Route path="/resume" element={<Resume />} />

      </Routes>
    </>
  );
}

export default App;