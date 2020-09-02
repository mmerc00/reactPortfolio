import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

const About = () => {
  return (
    <Jumbotron>
      <h1>Welcome!</h1>
      {/* <img src = "/assets/" className "card-img" alt= "Melis"> */}
      <p>
        Hello everyone! My name is Melissa Mercado. Here are my links to my
        resources.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default About;
