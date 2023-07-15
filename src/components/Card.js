import React from "react";
import { useState } from "react";

function Card({ id, name, info, price, image, removeCard }) {
  const description = `${info.substring(0, 200)}...`;
  const [readMore, setReadMore] = useState(false);

  function readMoreHandler() {
    setReadMore(!readMore);
  }

  return (
    <div className="card">
      <div>
        <img src={image} className="tour-image" alt="Location photograph"></img>
      </div>

      <div>
        <h2 className="tour-price">₹{price}</h2>

        <h2 className="tour-name">{name}</h2>
      </div>

      <div className="tour-desc">
        {readMore ? info : description}
        <span className="read-more" onClick={readMoreHandler}>
          {readMore ? `show less` : `read more`}
        </span>
      </div>

      <button className="not-interesed-btn" onClick={() => removeCard(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
