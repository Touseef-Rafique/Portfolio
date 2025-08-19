import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ import router

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import MainNav from "./Components/MainNav";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Resume from "./Components/Resume";

function App() {
  return (
    <>
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

