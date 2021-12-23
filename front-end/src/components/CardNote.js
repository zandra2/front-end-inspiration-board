import React from "react";
import "./CardNote.css";
import PropTypes from "prop-types";

const CardNote = () => {
  return (
    <section className="card-note card-container">
      <div className="card-para">
        <p>
          let's say hhheirrheirheireireirueirueorueorueoirueioru
          ierueoirueorueorueorueor ierueorueoreoreorueireire something
        </p>
      </div>
      <div className="card-footer">
        <div className="heart">
          <span>0</span>
          <span>🖤</span>
        </div>
        <form className="card-form">
          {/* need to add onClick={} to update counts */}
          <input className="card-input" type="text" value="+1" />
        </form>
        <form className="card-form">
          <input className="card-input" type="text" value="Delete" />
          {/* <button>+1</button> */}
        </form>
      </div>
    </section>
  );
};
export default CardNote;
