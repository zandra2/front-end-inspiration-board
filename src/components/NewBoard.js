import React from "react";
import "./NewBoard.css";
// import PropTypes from "prop-types";

const NewBoard = () => {
  return (
    <div className="new-board">
      <h2>create a new board</h2>
      {/* do I need a label tag for input tag if I don't need it? */}
      <input
        className="field-box"
        type="text"
        placeholder="Title"
        maxLength="100"
      />
      <input
        className="field-box"
        type="text"
        placeholder="Owner's Name"
        maxLength="100"
      />
      <div className="board-button-container">
        <input className="submit-button" type="submit" defaultValue="Submit" />
        {/* what is the difference between button vs submit */}
        {/* should I use type="reset" for the Hide button instead of submit? */}
        <input className="submit-button" type="submit" defaultValue="Hide" />
        <input className="hide-show" type="show" defaultValue= "Show Board" />
      </div>
    </div>
  );
};

export default NewBoard;
