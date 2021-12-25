import React from "react";
import "./CardBoard.css";
import PropTypes from "prop-types";
import CardNote from "./CardNote";

const CardBoard = (props) => {
  const { board } = props;

  return (
    <div>
      <div className="card-board">{board.title}</div>
      {board.cards.map((card) => {
        return <CardNote card={card} />;
      })}
    </div>
  );
};
export default CardBoard;
