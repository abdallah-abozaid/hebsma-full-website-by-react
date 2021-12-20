import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../img/thanks/1.png";
import { Button } from "react-bootstrap";
import Mycontext from "../store/context";
const Thanks = () => {
  const ctx = useContext(Mycontext);
  return (
    <div className="container my-5 text-center">
      <img src={img} alt="" />
      <h2>Thanks for Join to Us</h2>
      <p style={{ color: "grey" }}>
        this text can replace with any anther text this text can replace with
        any anther text this text can replace with any anther text
      </p>
      <Link
        to="/"
        onClick={() => {
          ctx.setback(true);
        }}
      >
        <Button variant="outline-info" type="submit" className="mt-3">
          Back To Home Bage
        </Button>
      </Link>
    </div>
  );
};

export default Thanks;
