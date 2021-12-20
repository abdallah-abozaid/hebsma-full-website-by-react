import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Mycontext from "../../store/context";
import "./singlework.css";

const SingleWork = () => {
  const ctx = useContext(Mycontext);
  const param = useParams();
  if (param.id !== null) {
    var item = ctx.items.filter((item) => {
      return item.id == param.id;
    });
  }
  return (
    <div className="container singlework">
      <div className="row">
        <div className="col-12 col-md-6 order-2 order-md-1">
          <h2>
            <span>{item[0].title}</span>
          </h2>
          <p> {item[0].desc1}</p>
          <p> {item[0].desc2}</p>
          <p> {item[0].desc3}</p>
          <Link
            to="/portfolio"
            onClick={() => {
              ctx.setback(false);
            }}
          >
            Go To Portfolio page
          </Link>
        </div>
        <div className="col-12 col-md-6 order-1 order-md-2">
          <img src={item[0].img.substring(1)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SingleWork;
