import React, { useContext } from "react";
import "./contactform.css";
import { Form, Row, Button, FloatingLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Mycontext from "../../../store/context";
const ContactForm = () => {
  const ctx = useContext(Mycontext);
  return (
    <div className="contactform ">
      <div className="container">
        <h2>Contact us now</h2>
        <Form>
          <Row className="mb-3">
            <div className="col-12 col-md-6">
              <FloatingLabel
                controlId="floatingTextarea"
                label="Name"
                className="mb-3"
              >
                <Form.Control as="input" placeholder="name" />
              </FloatingLabel>
            </div>
            <div className="col-12 col-md-6">
              <FloatingLabel
                controlId="floatingTextarea"
                label="E-mail"
                className="mb-3"
              >
                <Form.Control as="input" placeholder="email" />
              </FloatingLabel>
            </div>

            <FloatingLabel
              controlId="floatingTextarea"
              label="Location"
              className="mb-3 px-2"
            >
              <Form.Control as="input" placeholder="location" />
            </FloatingLabel>
          </Row>

          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px", borderRadius: "10px" }}
            />
          </FloatingLabel>

          <Link
            to="/thanks"
            onClick={() => {
              ctx.setback(false);
            }}
          >
            <Button variant="outline-info" type="submit" className="mt-3">
              Submit
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
