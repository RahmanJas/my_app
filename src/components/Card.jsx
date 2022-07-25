// name: first name and last name
// state of origin
// stack
//description (<40 characters)
//design the card using CSS
//NOTE: Remember to import css file to nyour component card.jsx

import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="Card">
      <p> {props.name} </p>
      <p> {props.state} </p>
      <p> {props.stack} </p>
      <p> {props.description} </p>
      <p> {props.jobTitle} </p>
    </div>
  );
};

export default Card;
