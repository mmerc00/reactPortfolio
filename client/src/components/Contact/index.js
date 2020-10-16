import React from "react";
import { Form, Button } from "react-bootstrap";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1>Contact me for more information!</h1>
      <Form className="contactForm">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          {/*           <Form.Text className="text-muted">
            
          </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="name" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
