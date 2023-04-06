import React from "react";
import "../App.css";

function Output(props) {
  const { word } = props;
  console.log(word); // add this line to check the value of word

  let letters = [];
  if (word && typeof word === "string") {
    letters = word.split("");
  }

  return (
    <div className="letter-output-container">
      {letters.map((letter, index) => (
        <span className="word-output" key={index}>
          {letter}
        </span>
      ))}
    </div>
  );
}

export default Output;

/* import React from "react";
import "../App.css";

function Output(props) {
  const { word } = props;
  console.log(word); // add this line to check the value of word
  const letters = word.split("");

  return (
    <div className="letter-output-container">
      {letters.map((letter, index) => (
        <span className="word-output" key={index}>
          {letter}
        </span>
      ))}
    </div>
  );
}

export default Output; */

/* import React from "react";
import wordInput from "./input";

function InputSplitter({ wordInput }) {
  const letters = Input.split("");

  return (
    <div>
      <p>output: {wordInput}</p>
    </div>
  );
}
export default InputSplitter;

{
  /*  {letters.map((letter, index) => (
   <div key={index}>{letter}</div>
 ))} */
