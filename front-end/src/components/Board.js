import React from "react";
import "./Board.css";
// import PropTypes from "prop-types";

const Board = () => {
  return (
    <div className="board">
      <h2>board</h2>
      <select name="board-title">
        <option value="">Select Title</option>
        {/* how to reflect more board title values when user add more titles */}
        {/* <option value=""></option> */}
      </select>
    </div>
  );
};

export default Board;
