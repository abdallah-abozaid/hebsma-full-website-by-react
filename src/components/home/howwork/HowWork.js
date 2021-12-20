import React from "react";
import "./howwrk.css";
import { Row, Col, Card } from "react-bootstrap";
import img1 from "../../../img/home/howworks/1.png";
import img2 from "../../../img/home/howworks/2.png";
import img3 from "../../../img/home/howworks/3.png";
import img4 from "../../../img/home/howworks/4.png";
import img11 from "../../../img/home/howworks/11.png";
import img22 from "../../../img/home/howworks/22.png";
import img33 from "../../../img/home/howworks/33.png";
import img44 from "../../../img/home/howworks/44.png";

const HowWork = () => {
  return (
    <div className="howwork">
      <div className="container">
        <h2>How Do We Work</h2>
        <p className="desc">
          This text can be replaced with any other element you wantThis text can
          be replaced with any other element you wantThis text can be replaced
          with any other element you wantThis
        </p>
      </div>
      <div className="howworks">
        <div className="container">
          <Row xs={1} sm={2} md={4} className="g-4">
            <Col>
              <Card className="item">
                <div className="imges">
                  <img src={img3} alt="" />
                  <img src={img11} alt="" />
                </div>
                <h6>collection of ideas</h6>
              </Card>
            </Col>
            <Col>
              <Card className="item">
                <h6>Planning and innovation</h6>
                <div className="imges">
                  <img src={img2} alt="" />
                  <img src={img22} alt="" />
                </div>
              </Card>
            </Col>
            <Col>
              <Card className="item">
                <div className="imges">
                  <img src={img3} alt="" />
                  <img src={img33} alt="" />
                </div>
                <h6>creative implementation</h6>
              </Card>
            </Col>
            <Col>
              <Card className="item">
                <h6>selection and evaluation</h6>
                <div className="imges">
                  <img src={img4} alt="" />
                  <img src={img44} alt="" />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
