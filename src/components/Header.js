import React, { useState } from "react";

function Header(props) {
  return (
    <div className="Header">
      <div className="title">
        <h2>Memory Game</h2>
        <p>
          Get points by clicking on an image, but don't click on any more than
          once!
        </p>
      </div>
      <div className="scoreboard">
        <p id="score">Score: {props.score}</p>
        <p id="best-score">Best Score: {props.bestScore}</p>
      </div>
    </div>
  );
}

export default Header;
