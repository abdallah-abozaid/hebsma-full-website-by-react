import React, { useContext } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Mycontext from "../../../store/context";
import "./courses.css";

const Courses = () => {
  const ctx = useContext(Mycontext);
  return (
    <div className="courses container my-5 ">
      <h2 className="text-center my-4">Our New Courses</h2>
      <Row xs={1} sm={2} md={2} lg={3} className="g-4">
        {ctx.courses.map((item) => (
          <Col key={item.id}>
            <Card className="item">
              <img src={item.img} alt="" />
              <div className="content">
                <div>
                  <h6>{item.title}</h6>
                  <Link
                    onClick={() => {
                      ctx.setback(false);
                    }}
                    to={`/home/courses/${item.id}`}
                  >
                    Subscripe Now!
                  </Link>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Courses;
