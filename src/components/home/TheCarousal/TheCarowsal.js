import React, { useContext } from "react";
import "./thecarowsal.css";
import { Carousel, Button } from "react-bootstrap";
import img1 from "../../../img/home/carowsal1.svg";
import img2 from "../../../img/home/carowsal2.svg";
import img3 from "../../../img/home/carowsal3.png";
import { Link } from "react-router-dom";
import Mycontext from "../../../store/context";
const TheCarowsal = () => {
  const ctx = useContext(Mycontext);
  return (
    <div className="container carowsal">
      <Carousel controls={false}>
        <Carousel.Item interval={4000}>
          <div className="row">
            <div className="col-12 col-lg-6 content">
              <div style={{ width: "100%" }}>
                <h2>We provide you</h2>
                <h3>best job opportunities</h3>
                <h6>Through our professional programs</h6>

                <Link
                  to="/about"
                  onClick={() => {
                    ctx.setback(false);
                  }}
                >
                  <button> Know Us</button>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img className="d-block w-100" src={img1} alt="First slide" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <div className="row">
            <div className="col-12 col-lg-6 content">
              <div style={{ width: "100%" }}>
                <h2>We present to you</h2>
                <h3>The best programs and courses</h3>
                <h6>Through distinguished coaches</h6>
                <Link
                  to="/about"
                  onClick={() => {
                    ctx.setback(false);
                  }}
                >
                  <button> Know Us</button>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img className="d-block w-100" src={img2} alt="second slide" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className="row">
            <div className="col-12 col-lg-6 content">
              <div style={{ width: "100%" }}>
                <h2>We get you to</h2>
                <h3>Technology from widest doors</h3>
                <h6>Through our professional services</h6>
                <Link
                  to="/about"
                  onClick={() => {
                    ctx.setback(false);
                  }}
                >
                  <button> Know Us</button>
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <img className="d-block w-100" src={img3} alt="therd slide" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TheCarowsal;
