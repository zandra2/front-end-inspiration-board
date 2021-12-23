import React from "react";
import "./NewBoard.css";
// import PropTypes from "prop-types";

const NewBoard = () => {
  return (
    <div className="new-board">
      <h2>create a new board</h2>
      {/* do I need a label tag for input tag if I don't need it? */}
      <input className="field-box" type="text" placeholder="Title" />
      <input className="field-box" type="text" placeholder="Owner's Name" />
      <div className="board-button-container">
        <input className="submit-button" type="submit" value="Submit" />
        {/* what is the difference between button vs submit */}
        {/* should I use type="reset" for the Hide button instead of submit? */}
        <input className="submit-button" type="submit" value="Hide" />
        <input className="hide-show" type="show" value="Show Board" />
      </div>
    </div>
  );
};

export default NewBoard;
