import React from "react";
import "./NewBoard.css";
// import PropTypes from "prop-types";

const NewBoard = () => {
  return (
    <div className="newboard">
      <h2>create a new board</h2>
      {/* do I need a label tag for input tag if I don't need it? */}
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Owner's Name" />
      <input type="submit" value="Submit" />
      {/* what is the difference between button vs submit */}
      {/* should I use type="reset" for the Hide button instead of submit? */}
      <input type="submit" value="Hide" />
      <input className="hide-show" type="show" value="Show Board" />
    </div>
  );
};

export default NewBoard;
