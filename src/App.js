import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {




  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
