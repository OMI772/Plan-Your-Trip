import React from "react";
import Card from "./Card";

function Tours(props) {
  return (
    <div className="card-container">
      {props.tours?.map((plan) => {
        return <Card {...plan} removeCard={props.removeCard}></Card>;
      })}
    </div>
  );
}

export default Tours;
