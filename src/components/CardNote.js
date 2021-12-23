import React from "react";
import "./CardNote.css";
import { useState } from 'react';
import PropTypes from "prop-types";

const CardNote = () => {

  const [likesCount, setLikesCount] = useState(0);
  const increaseLikes = () => {
      setLikesCount(likesCount + 1);
  };

  // return (
  //   <section>
  //     <p>The number of likes is {likesCount}.</p>
  //     <button onClick={increaseLikes}>Like</button>
  //   </section>
  // );

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
          <span>{likesCount}</span>
          <span>🖤</span>
        </div>
        <form className="card-form">
          {/* need to add onClick={} to update counts */}
          <input onClick={increaseLikes} className="card-input" type="text" value="+1" />
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
