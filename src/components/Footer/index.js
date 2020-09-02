import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";


const Footer = () => {
  const location = useLocation();

return (
<div class="container">
 <Navbar bg="light" fixed="bottom" variant="light" footer-link>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
     <Nav className="mr-auto">
      </Nav> 
    </div>
  )}}
  
export default Footer;
