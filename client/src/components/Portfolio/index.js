import React from "react";
import Card from "react-bootstrap/Card";
import "./portfolio.css";

const myImg = "assets/zap.jpg";
const Img = "assets/village.png";
const newImg = "assets/budget.gif";

const styles = {
  img: {
    height: "500px",
    width: "500px",
    fitContent: "contain",
  },
};

const Portfolio = () => {
  return (
    <div>
      <Card className="text-center p-3">
        <Card.Img
          variant="top"
          style={styles.img}
          src={myImg}
          src="assets/zap.jpg"
        />
        <Card.Body>
          <Card.Title>Zap</Card.Title>
          <Card.Text>
            Check out this cool game app that my teammates and I worked on. We
            created this app that shows video games, where to buy them at the
            best price and multiple previews.
          </Card.Text>{" "}
          <a href="https://jamesrowe1.github.io/ZAP/">
            //add blank to each link
            <button> check it out</button>
          </a>
        </Card.Body>
      </Card>
      <Card className="p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Check out Wyld Card! https://blooming-crag-28988.herokuapp.com/
            <br></br>
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card>
      <Card className="text-center p-3" id="card">
        <Card.Img
          variant="top"
          style={styles.img}
          src={myImg}
          src="assets/village.png"
        />
        <Card.Body>
          <Card.Title>The Village Application</Card.Title>
          <Card.Text>Project 2</Card.Text>
        </Card.Body>
      </Card>
      <Card bg="primary" text="white" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Keep track of your physical activity with this fitness application.
            https://fitnessapplication.herokuapp.com/stats
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card>
      <Card className="text-center">
        <Card.Body>
          <Card.Img style={styles.img} src={myImg} src="assets/budget.gif" />
          <Card.Title>Track your spending online and offline!</Card.Title>
          <Card.Text>https://trackerofbudget.herokuapp.com/</Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="text-right">
        <blockquote className="blockquote mb-0 card-body">
          <p></p>
          <footer className="blockquote-footer">
            <small className="text-muted"></small>
          </footer>
        </blockquote>
      </Card>
    </div>
  );
};

export default Portfolio;
