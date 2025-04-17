import React from 'react';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import MainNav from './Components/MainNav';
import Projects from './Components/Projects';
import Services from './Components/Services';

function App() {
  return (
    <div>
      <MainNav/>
      <Home />
      <About />
      <Projects/>
      <Services/>
      <Contact />
    </div>
  );
}

export default App;
