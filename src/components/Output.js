import React from "react";
import "../App.css";

function Output({ enteredWords }) {
  return (
    <div>
      {enteredWords.map((word, index) => (
        <div className="letter-output-container" key={index}>
          {word.word.split("").map((letter, index) => (
            <span className="word-output" key={index}>
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Output;
