import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Mycontext from "../../store/context";
import { Row, Form, Col, Button } from "react-bootstrap";
import "./singlecourse.css";

const SingleCourse = () => {
  const ctx = useContext(Mycontext);
  const param = useParams();
  if (param.id !== null) {
    var item = ctx.courses.filter((item) => {
      return item.id == param.id;
    });
  }
  return (
    <div className="container my-4 singlecourse">
      <div className="row">
        <div className="col-sm-12 col-md-6 order-2 order-md-1">
          <h4 className="my-2">{item[0].title}</h4>
          <div className="form mt-4">
            <Form>
              <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control placeholder="Your Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address </Form.Label>
                <Form.Control placeholder="e.g Gaza - El Naser" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>marred</option>
                    <option>Single</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Agree to terms and conditions"
                />
              </Form.Group>

              <Button variant="outline-success" type="submit">
                Submit
              </Button>

              <Link
                to="/"
                onClick={() => {
                  ctx.setback(true);
                }}
              >
                <Button variant="outline-info" className="mx-3" type="submit">
                  Back to Home Page
                </Button>
              </Link>
            </Form>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 sec order-1 order-md-2">
          <div className="card">
            <img src={item[0].img.substring(1)} alt="" />
            <h5 className="text-center">{item[0].title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
