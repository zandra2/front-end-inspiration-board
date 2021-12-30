import React from "react";
import "./CardNote.css";

const CardNote = (props) => {
  const { card, onDeleteCard } = props;

  const addLike = () => {
    // STUB
  };

  const deleteCard = () => {
    onDeleteCard(card.card_id);
  };

  return (
    <section className="card-note card-container">
      <div className="card-para">
        <p> {card.message}</p>
      </div>
      <div className="card-footer">
        <div className="heart">
          <span>{card.likes_count}</span>
          <span>🖤</span>
        </div>
        <button onClick={addLike} className="card-input">
          +1
        </button>
        <button onClick={deleteCard} className="card-input">
          Delete
        </button>
      </div>
    </section>
  );
};

export default CardNote;
