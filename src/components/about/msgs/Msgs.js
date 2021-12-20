import React from "react";
import img from "../../../img/about/main4.png";
import "./msgs.css";

const Msgs = () => {
  return (
    <div className="msgs ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="inner">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 inner">
            <div>
              <h2>Our Messages</h2>
              <p>
                This text can be replaced with any other element you wantThis
                text can be replaced with any other element you wantThis text
                can be replaced with any other element you wantThis text can be
                replaced with any other element you want
              </p>
              <p>
                other element you wantThis text can be replaced with any other
                element you wantThis text can be replaced with any other element
                you want
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Msgs;
