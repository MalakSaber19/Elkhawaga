import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Works from "./components/Pages/Work";
import Expert from "./components/Pages/Expert";
import AboutPage from "./components/Pages/AboutPage";
import OurPricing from "./components/OurPricing";
import Services from "./components/Pages/Services";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Works/>} />
        <Route path="/expert" element={<Expert/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/#pricing" element={<OurPricing/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </Router>
  );
}

export default App;
