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
        {/**
        <form className="card-form">
          <input
            onClick={increaseLikes}
            className="card-input"
            type="text"
            value="+1"
          />
        </form>
        <form className="card-form">
          <input className="card-input" type="text" value="Delete" />
        </form>
        */}
      </div>
    </section>
  );
};

export default CardNote;
