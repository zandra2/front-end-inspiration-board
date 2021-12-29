import React from "react";
import "./CardNote.css";
import { useState } from "react";
import PropTypes from "prop-types";

// Using this variable to mock data from the back-end (replace with API response)

// for cardInfo.map


const CardNote = (props) => {
  // likes count is coming from prompt and it can be tracked with UseState instead
  const [likesCount, setLikesCount] = useState(props.likesCount);
  const increaseLikes = () => {
    setLikesCount(likesCount + 1);
  };
  
  return (
    <section className="card-note card-container">
      <div className="card-para">
        <p>
          {props.message}
        </p>
      </div>
      <div className="card-footer">
        <div className="heart">
          <span>{likesCount}</span>
          <span>🖤</span>
        </div>
        <form className="card-form">
          {/* need to add onClick={} to update counts */}
          <input
            onClick={increaseLikes}
            className="card-input"
            type="text"
            defaultValue="+1"
          />
        </form>
          <button onClick={() => props.deleteCard(props.cardId)}>Delete</button>
      </div>
    </section>
  );
};

export default CardNote;
