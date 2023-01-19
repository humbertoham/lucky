import React from "react";


import Home from "./components/Home";
import Boletos from "./components/Boletos";
import { GlobalStyle } from "./GlobalStyle";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Foot from "./components/Foot";
import NavB from "./components/Navbar/Navbar";

const App = () => (
  <Router>
    <NavB/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Boletos" element={<Boletos />} />
      
    </Routes>
    <Foot />
    <GlobalStyle />
  </Router>
);

export default App;