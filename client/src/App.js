import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import React, { Component } from "react";
// import Pdf from "./components/resume/resume";
import "./App.css";
// import nyc from "public/assets/nyc.jpg"

function App() {
  return (
    <div className="backgroundImage">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Portfolio" component={Portfolio} />
          {/* <Route component={resume} /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
