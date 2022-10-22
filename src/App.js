import React from "react";
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import About from './pages/About'
import Contact from "./pages/Contact";
import WhatWeDoPage1 from "./pages/WhatWeDoPage1";
import Error from "./pages/Error";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/whatwedopage1" element={<WhatWeDoPage1 />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </div>
  );
}

export default App;
