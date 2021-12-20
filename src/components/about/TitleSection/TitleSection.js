import React from "react";
import "./title.css";
import { BsSubtract } from "react-icons/bs";
const TitleSection = (props) => {
  return (
    <div className="TitleSection">
      <p>
        <BsSubtract /> Home \ <sub>{props.title}</sub>
      </p>
      <h1>{props.title}</h1>
    </div>
  );
};

export default TitleSection;
