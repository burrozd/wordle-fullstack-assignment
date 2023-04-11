/* import React from "react";
import Tile from "./tile";

function AttemptOne(props) {
  const { attemptOne, setAttemptOne, letters } = props;

  const handleClick = (event) => {
    event.preventDefault();
    if (letters.length === 5) {
      setAttemptOne(letters);
    }
  };

  return (
    <div className="row">
      {attemptOne.map((letter, index) => (
        <Tile letter={letter} key={index} />
      ))}
    </div>
  );
}

export default AttemptOne; */

import React, { useState } from "react";
import Tile from "./tile";

function Attempt(props) {
  const { letters, selectedAttempt, setAttempt } = props;
  const [word, setWord] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (word.length === 5) {
      setAttempt((prevState) => ({
        ...prevState,
        [selectedAttempt]: word,
      }));
      setWord("");
    }
  };

  return (
    <div className="row">
      {letters &&
        letters.map((letter, index) => <Tile letter={letter} key={index} />)}
      {selectedAttempt && (
        <div className="word-input-container">
          <input
            type="text"
            className="word-input"
            maxLength={5}
            value={word}
            onChange={(event) => setWord(event.target.value)}
          />
          <button type="button" className="word-submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default Attempt;
