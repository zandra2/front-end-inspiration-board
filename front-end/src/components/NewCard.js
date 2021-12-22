import React from "react";
import "./NewCard.css";
// import PropTypes from "prop-types";

const NewCard = () => {
  return (
    <div className="newcard">
      <h2>create a new card</h2>
      <select name="board-title">
        <option value="">Select Board Title</option>
        {/* how to reflect more board title options when user add more board titles  */}
        {/* <option value=""></option> */}
      </select>
      <input type="text" placeholder="Message" />
      <input type="submit" value="Submit" />
    </div>
  );
};

export default NewCard;
