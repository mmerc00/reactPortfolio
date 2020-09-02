import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const About = () => {
  return (
    <Jumbotron>
      <h1>Welcome!</h1>
      {/* <img src = "/assets/lawnpic.jpg" className "card-img" alt= "Melis"> */}
      <p>
        Hello everyone! My name is Melissa Mercado. Here are my links to my
        resources.
      </p>
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
