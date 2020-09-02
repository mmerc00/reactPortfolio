import React from "react";
import Header from "../Header/index.js";

const Contact = () => {
  return (
    <h1>
      Contact me for more information!
    </h1>
    <Form className="contactForm">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
  );
{/* };

<section class="container1">
      <h1>Contact</h1>
      <hr>
      <section class="form-group">
        <label for="exampleFormControlInput1">Name</label>
        <input
          type="name"
          class="form-control"
          id="exampleFormControlInput1"
        />
        <section class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
      
      <section class="form-group">
        <label for="exampleFormControlTextarea1">Send something my way!</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"></textarea>

      <button type="submit" class="btn btn-primary mb-2">
        Submit
      </button>
    </section> */}

export default Contact;
