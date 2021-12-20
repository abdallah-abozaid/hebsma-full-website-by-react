import React from "react";
import "./costomer.css";
import { Row, Col, Card } from "react-bootstrap";
import img1 from "../../../img/home/customer/auther1.png";
import img2 from "../../../img/home/customer/auther2.png";
const Customer = () => {
  return (
    <div className="customer">
      <div className="container">
        <div className=" row g-4">
          <div className="col-12 col-lg-4">
            <Card className="fst">
              <p className="color">What our customers say about us</p>
              <h3>
                Our customers honor us with words Simple about our service
              </h3>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Card>
              <div className="content">
                <p>
                  This text can be replaced with any other text you wantThis
                  text can be replaced with any other text you wantThis text can
                  be replaced with any other text you wantThis text can be
                  replaced
                </p>
                <div className="inner">
                  <div>
                    <img src={img1} alt="" />
                  </div>
                  <div>
                    <h6>Khaled Al Rabah</h6>
                    <p>CEO of Life Company</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Card>
              <div className="content">
                <p>
                  This text can be replaced with any other text you wantThis
                  text can be replaced with any other text you wantThis text can
                  be replaced with any other text you wantThis text can be
                  replaced
                </p>
                <div className="inner">
                  <div>
                    <img src={img2} alt="" />
                  </div>
                  <div>
                    <h6>Mohammed al-Banna</h6>
                    <p>CEO of Life Company</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Customer;
