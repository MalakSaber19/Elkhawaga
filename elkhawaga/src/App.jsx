import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Works from "./components/Pages/Work";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/work" element={<Works/>} />
      </Routes>
    </Router>
  );
}

export default App;
