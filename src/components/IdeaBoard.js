import React from "react";
import "./IdeaBoard.css";
import IdeaCard from "./IdeaCard";

const IdeaBoard = (props) => {
  // console.log(props.board);
  const { board, onDeleteCard, onAddLike } = props; //removed onDeleteBoard

  //TODO: **** Delete Board Button *************
  // const deleteBoard = () => {
  //   onDeleteBoard(board.board_id);
  // };

  //adding a ? at the end of the variable to tell React to wait and see what loaded before sending an error.
  return (
    <div>
      <div className="card-board">Cards for {board?.title}</div>

      {/* <div className="card-board">
        <button onClick={deleteBoard} className="delete-button" type="button">
          Delete Board
        </button>
      </div> */}
      {board?.cards.map((card) => {
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
