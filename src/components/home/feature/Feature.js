import React from "react";
import "./feature.css";
import img11 from "../../../img/home/service/1.png";
import img22 from "../../../img/home/service/2.png";
import img33 from "../../../img/home/service/3.png";
import img1 from "../../../img/home/service/5.png";
import img2 from "../../../img/home/service/6.png";
import img3 from "../../../img/home/service/7.png";
import img4 from "../../../img/home/service/8.png";
import img5 from "../../../img/home/service/9.png";
import img6 from "../../../img/home/service/4.png";
import { Row, Col, Card } from "react-bootstrap";

const Feature = () => {
  return (
    <div className="feature text-center">
      <div className="container">
        <h2>Feature</h2>
        <p className="desc">
          This text can be replaced with any other element you wantThis text can
          be replaced with any other element you wantThis text can be replaced
          with any other element you wantThis
        </p>
        <div className="services">
          <Row xs={1} sm={2} md={3} className="g-4">
            <Col>
              <Card>
                <div className="sarve">
                  <div className="imges">
                    <img src={img11} alt="" />
                    <img src={img22} alt="" />
                    <img src={img33} alt="" />
                    <img src={img1} alt="" />
                  </div>
                  <h5>E-Marketing</h5>
                </div>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="sarve">
                  <div className="imges">
                    <img src={img11} alt="" />
                    <img src={img22} alt="" />
                    <img src={img33} alt="" />
                    <img src={img3} alt="" />
                  </div>
                  <h5>visual identity design</h5>
                </div>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="sarve">
                  <div className="imges">
                    <img src={img11} alt="" />
                    <img src={img22} alt="" />
                    <img src={img33} alt="" />
                    <img src={img2} alt="" />
                  </div>
                  <h5>Graphic Design</h5>
                </div>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="sarve">
                  <div className="imges">
                    <img src={img11} alt="" />
                    <img src={img22} alt="" />
                    <img src={img33} alt="" />
                    <img src={img4} alt="" />
                  </div>
                  <h5>creative writing services</h5>
                </div>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="sarve">
                  <div className="imges">
                    <img src={img11} alt="" />
                    <img src={img22} alt="" />
                    <img src={img33} alt="" />
                    <img src={img6} alt="" />
                  </div>
                  <h5>Photography and production</h5>
                </div>
              </Card>
            </Col>
            <Col>
              <Card>
                <div className="sarve">
                  <div className="imges">
                    <img src={img11} alt="" />
                    <img src={img22} alt="" />
                    <img src={img33} alt="" />
                    <img src={img5} alt="" />
                  </div>
                  <h5>Search Engine Optimization</h5>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Feature;
