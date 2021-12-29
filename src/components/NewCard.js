import React from "react";
import "./NewCard.css";
import { useState } from "react";
import CardNote from "./CardNote";

// import PropTypes from "prop-types";

const NewCard = (props) => {
  //******My mess******* */
  const [message, setMessage] = useState("");
  const { onNewCard } = props;

  // Respond to the button click after the user has typed the message
  const handleSubmitMessage = (event) => {
    event.preventDefault();
    onNewCard(message);
    setMessage("");
  };

  // keep track of the state as the user types
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  //problem-needs to pass this to card note child
  // ****** end my mess here******* */

  return (
    // added form tag. Not sure if I need it?
    <form onSubmit={handleSubmitMessage}>
      <div className="new-card">
        <h2>create a new card</h2>
        {/**
      <select className="field-box select-box" name="board-title">
        <option value="">Select Board Title</option>
      </select>
      */}
        <input
          onChange={handleMessageChange}
          className="field-box"
          type="text"
          placeholder="Message"
          maxLength="100"
          value={message}
        />
        <input className="submit-button" type="submit" value="Submit" />
      </div>
    </form>
  );
};

export default NewCard;
