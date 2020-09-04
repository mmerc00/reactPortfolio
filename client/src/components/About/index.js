import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const myImg = "assets/lawnpic.jpg";

const styles = {
  img: {
    height: "400px",
    width: "auto",
    fitContent: "contain",
  },
};

const About = () => {
  return (
    <Jumbotron>
      <h1>Welcome!</h1>
      <img style={styles.img} src={myImg} className="card-img" alt="Melis" />
      <p>Hey everybody! Take a look around my page to explore more.</p>
      <p>
        <Button
          variant="primary"
          href="www.linkedin.com/in/melissa-mercado2323"
        >
          Linkedin
        </Button>
        <Button variant="primary" href="https://github.com/mmerc00">
          Github
        </Button>
      </p>
    </Jumbotron>
  );
};

export default About;
