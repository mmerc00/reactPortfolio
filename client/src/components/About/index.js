import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const About = () => {
  return (
    <Jumbotron>
      <h1>Welcome!</h1>
      {/* <img src = "/assets/lawnpic.jpg" className "card-img" alt= "Melis"> */}
      <p>Hey everybody! Take a look around my page to explore more.</p>
      <p>
        <Button variant="primary" href="">
          Linkedin
        </Button>
        <Button variant="primary">Github</Button>
      </p>
    </Jumbotron>
  );
};

export default About;
