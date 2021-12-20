import React from "react";
import "./contactinfo.css";
import img from "../../../img/contact/fst.png";
import img1 from "../../../img/contact/1.png";
import img2 from "../../../img/contact/11.png";
import img3 from "../../../img/contact/111.png";
import img4 from "../../../img/contact/1111.png";

const ContextInfo = () => {
  return (
    <div className="contactinfo">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2>Stay in touch with us</h2>
            <p>
              This text you can replace it with any other text you want This
              text you can replace it with any other text you want This text you
              can replace it with any other text you want
            </p>
            <div className="item">
              <div className="imgs">
                <img src={img2} alt="" />
                <img src={img4} alt="" />
                <img src={img3} alt="" />
                <img src={img2} alt="" />
                <img src={img1} alt="" />
              </div>
              <div className="inner">
                <div>
                  <h4>Our address</h4>
                  <p>Al-Jalaa Tower - Gaza - Palestine</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="imgs">
                <img src={img2} alt="" />
                <img src={img4} alt="" />
                <img src={img3} alt="" />
                <img src={img2} alt="" />
                <img src={img1} alt="" />
              </div>
              <div className="inner">
                <div>
                  <h4>E-mail</h4>
                  <p>abood.osa.99.10@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="imgs">
                <img src={img2} alt="" />
                <img src={img4} alt="" />
                <img src={img3} alt="" />
                <img src={img2} alt="" />
                <img src={img1} alt="" />
              </div>
              <div className="inner">
                <div>
                  <h4>the phone</h4>
                  <p>0599197739</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 last">
            <div>
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContextInfo;
