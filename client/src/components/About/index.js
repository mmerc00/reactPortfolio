import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import "./about.css";

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
    <div id="about">
      <Jumbotron>
        <h1>Hi there,</h1>
        <img
          style={styles.img}
          src={myImg}
          className="card-img"
          alt="Melissa"
        />
        <p>
          Welcome to my portfolio! My name is Melissa Mercado and I graduated
          Penn State in 2019 with a MBA in Telecomunications. During my time at
          PSU, I got involved with THON and focused my studies on product
          development. Currently I am a student at Columbia's full stack coding
          bootcamp. Take a look around my page to explore more about me.
        </p>
        <p>
          <Button
            variant="primary"
            href="www.linkedin.com/in/melissa-mercado2323"
            target="blank"
          >
            Linkedin
          </Button>
          <br></br>
          <br></br>
          <Button variant="primary" href="https://github.com/mmerc00">
            Github
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default About;
