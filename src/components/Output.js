import React from "react";
import "../App.css";

function Output(props) {
  return (
    <p className="word-output">Word from parent component: {props.word}</p>
  );
}

export default Output;

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
