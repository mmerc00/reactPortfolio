import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import About from "./components/aBOUT";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
