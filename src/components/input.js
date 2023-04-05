import React from "react";
import { useRef, useState } from "react";
import Output from "./Output";
import "../App.css";

function Input() {
  const inputRef = useRef();

  const [wordInput, setWordInput] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    const input = inputRef.current.value;

    if (/^[A-Za-z]+$/.test(input)) {
      setWordInput(input);
    } else {
      alert("Please enter only letters!");
    }
  };

  return (
    <div>
      <p className="word-output">Your word: {wordInput}</p>
      <form className="word-input-container">
        <input
          type="text"
          className="word-input"
          ref={inputRef}
          maxLength={5}
        />
        <button type="submit" className="word-submit" onClick={handleClick}>
          Submit
        </button>
      </form>
      <Output word={wordInput} />
    </div>
  );
}

export default Input;
