import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Melissa Mercado</Navbar.Brand>
        <Nav className="mr-auto">
      <Nav.Link className= "navLink" href="/Portfolio">Portfolio</Nav.Link>
      <Nav.Link className= "navLink" href="/Contact">Contact</Nav.Link>
      <Nav.Link to="/About" {location.pathname === "/about"}>About</Nav.Link>
      </Navbar>
    </div>
  );
};

export default Navbar;

{/* 
<Link
        to="/"
        className={location.pathname === "/" ? "navbar-brand" : "nav-link"}
      >
        Home
        onClick
      </Link> */}