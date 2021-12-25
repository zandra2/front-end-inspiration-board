import { useState, useEffect } from "react";
import axios from "axios";
import "./NewBoard.css";
// import PropTypes from "prop-types";

const NewBoard = (props) => {
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");

  // addBoard should call useEffect(() => axios.post('api/post/boards'))
  // useEffect(() => {
  //   const createBoard = () => {
  //     axios.post("/boards", {
  //       title: title,
  //       owner: owner,
  //     });
  //   };
  // }, [createBoard]);

  // validateTitle and validOwner function

  const handleSubmit = () => {
    // step1 validate title and owner
    // step2 call axios.post
    console.log("Submit title and owner inside of axios to the backend!!!");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    // run something else...
  };

  return (
    // check to see if state has changed. If so re-render
    <form className="new-board" onSubmit={handleSubmit}>
      <h2>create a new board</h2>
      {/* do I need a label tag for input tag if I don't need it? */}
      <input
        // event handler
        // onChange={(e) => setTitle(e.target.value)}
        onChange={handleTitleChange}
        name="title"
        // where state is being referenced
        value={title}
        className="field-box"
        type="text"
        placeholder="Title"
        maxlength="100"
      />
      <input
        onChange={(e) => setOwner(e.target.value)}
        value={owner}
        name="owner"
        className="field-box"
        type="text"
        placeholder="Owner's Name"
        maslength="100"
      />
      <div className="board-button-container">
        <button
          className="submit-button"
          type="submit"
          value="Submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
        {/* what is the difference between button vs submit */}
        {/* should I use type="reset" for the Hide button instead of submit? */}
        {/* <input className="submit-button" type="submit" value="Hide" /> */}
        {/* <input className="hide-show" type="show" value="Show Board" /> */}
      </div>
    </form>
  );
};

export default NewBoard;
