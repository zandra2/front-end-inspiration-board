import React from "react";
import "./CardNote.css";
import { useState } from "react";
import PropTypes from "prop-types";

const CardNote = (props) => {
  const { card } = props;

  const [likesCount, setLikesCount] = useState(0);
  const increaseLikes = () => {
    setLikesCount(likesCount + 1);
  };

  return (
    <section className="card-note card-container">
      <div className="card-para">
        <p> {card.message}</p>
      </div>
      <div className="card-footer">
        <div className="heart">
          <span>{likesCount}</span>
          <span>🖤</span>
        </div>
        <button onClick={increaseLikes} className="card-input">
          +1
        </button>
        <button className="card-input">Delete</button>
      </div>
    </section>
  );
};

export default CardNote;
