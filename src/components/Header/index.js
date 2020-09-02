import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";


const Header = () => {
  const location = useLocation();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Melissa Mercado</Navbar.Brand>
        <Nav className="mr-auto">
      <Nav.Link className= "navLink" href="/Portfolio">Portfolio</Nav.Link>
      <Link
        to="/"
        className={location.pathname === "/" ? "navbar-brand" : "nav-link"}
      >
        About
      </Link>
    </div>
  );
};

export default Navbar;

