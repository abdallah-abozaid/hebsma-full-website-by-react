import React, { useContext } from "react";
import img from "../../../img/home/getKnow.png";
import { Link } from "react-router-dom";
import "./getknow.css";
import Mycontext from "../../../store/context";

const GetKnow = () => {
  const ctx = useContext(Mycontext);
  return (
    <div className="getKnow">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={img} alt="get know" />
          </div>
          <div className="col-12 col-lg-6 content">
            <div>
              <h2>
                get to know <span>hepsma</span>
              </h2>
              <p>
                This text can be replaced with any other element you wantThis
                text can be replaced with any other element you wantThis text
                can be replaced with any other element you wantThis text can be
                replaced with any other element you want
              </p>
              <Link
                to="/about"
                onClick={() => {
                  ctx.setback(false);
                }}
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetKnow;
