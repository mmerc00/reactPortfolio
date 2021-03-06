import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "../NavLink";

const Header = () => {
  return (
    <div>
      <Navbar>
        <NavLink path="/" classes={["navbar-brand"]}>
          Melissa Mercado
        </NavLink>

        <nav className="ml-auto">
          <NavLink path="/">About</NavLink>
          <NavLink path="/portfolio">Portfolio</NavLink>
          <NavLink path="/contact">Contact</NavLink>
        </nav>
      </Navbar>
    </div>
  );
};

export default Header;
