import React from "react";
import "./IdeaBoard.css";
import IdeaCard from "./IdeaCard";

const IdeaBoard = (props) => {
  console.log(props.board);
  const { board, onDeleteCard, onAddLike, onDeleteBoard } = props;

  const deleteBoard = () => {
    onDeleteBoard (board.board_id);
  };

  return (
    <div>
      <div className="card-board">Cards for {board.title}</div>
      <div className="card-board">
        <button onClick={deleteBoard} className="delete-button" type="button">
          Delete Board
        </button>
      </div>
      {board.cards.map((card) => {
        return (
          <IdeaCard
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
export default IdeaBoard;
