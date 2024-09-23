import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@popperjs/core/dist/umd/popper.min.js";
import { BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
// import HomePage from "./components/pages/HomePage";
// import Symptoms from "./components/pages/Symptoms";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch></Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
