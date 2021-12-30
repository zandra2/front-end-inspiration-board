import React from "react";
import "./CardBoard.css";
import CardNote from "./CardNote";

const CardBoard = (props) => {
  const { board, onDeleteCard, onAddLike } = props;

  return (
    <div>
      <div className="card-board">Cards for {board.title}</div>
      {board.cards.map((card) => {
        return (
          <CardNote
            key={card.card_id}
            card={card}
            onDeleteCard={onDeleteCard}
            onAddLike={onAddLike}
          />
        );
      })}
    </div>
  );
};
export default CardBoard;
