import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container">
      <Navbar bg="light" fixed="bottom" variant="light" id="footer">
        <Navbar.Brand href="#home" text-align="center">
          Melissa Mercado
        </Navbar.Brand>
        <nav className="mr-auto"></nav>
      </Navbar>
    </div>
  );
};

export default Footer;
