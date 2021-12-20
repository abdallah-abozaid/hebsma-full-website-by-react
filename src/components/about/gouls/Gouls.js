import React from "react";
import img from "../../../img/about/main3.png";
import "./gouls.css";

const Gouls = () => {
  return (
    <div className="gouls ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 inner">
            <div>
              <h2>Our Insite</h2>
              <p>
                This text can be replaced with any other element you wantThis
                text can be replaced with any other element you wantThis text
                can be replaced with any other element you wantThis text can be
                replaced with any other element you want
              </p>
              <h2>Our Gouls</h2>
              <p>
                other element you wantThis text can be replaced with any other
                element you wantThis text can be replaced with any other element
                you want
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="inner">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gouls;
