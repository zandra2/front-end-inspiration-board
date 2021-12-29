import React from "react";
import "./NewCard.css";
// import PropTypes from "prop-types";

const NewCard = () => {
  return (
    <div className="new-card">
      <h2>create a new card</h2>
      {/**
      <select className="field-box select-box" name="board-title">
        <option value="">Select Board Title</option>
      </select>
      */}
      <input className="field-box" type="text" placeholder="Message" />
      <input className="submit-button" type="submit" value="Submit" />
    </div>
  );
};

export default NewCard;
