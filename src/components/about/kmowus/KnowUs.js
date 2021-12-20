import React from "react";
import img from "../../../img/about/main2.png";
import "./knowus.css";

const KnowUs = () => {
  return (
    <div className="knowus ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="inner">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 inner">
            <div>
              <h2>Know Us</h2>
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
              <p>
                This text can be replaced with any other element you wantThis
                text can be replaced with
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowUs;
