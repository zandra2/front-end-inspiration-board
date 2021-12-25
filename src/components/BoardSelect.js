import React from "react";
import "./Board.css";
// import PropTypes from "prop-types";

// destructuring can looking: const Board = (props) => { const { boards } = props; or const Board = ({ boards, color }). Do 2nd destructoring when there's more than one props are being pass down but otherwise this all depends on how the team want to do it.
// TODO: Check out Controlled vs Uncontrolled Components
const BoardSelect = (props) => {
  const { boards } = props;

  return (
    <div className="board">
      <h2 className="board-title">board</h2>
      <select className="field-box select-box" name="board-title">
        {/* default setting for sector */}
        <option value="">Select Title</option>
        use map to iterate the boards and return multiple return option objects
        {boards.map((boards) => {
          return <option value={boards.title}>{boards.title}</option>;
        })}
      </select>
    </div>
  );
};

export default BoardSelect;
