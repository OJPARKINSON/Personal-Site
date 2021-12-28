import React from "react";
import "../components/layout.css";

import Header from "../components/header";
import About from "../components/about";
import Contact from "../components/contact";
import Portfolio from "../components/portfolio";

const Home = () => (
  <div className="container">
    <Header />
    <About />
    <div className="Spacer" />
    <Portfolio />
    <Contact />
  </div>
);

export default Home;
