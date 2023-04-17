import React, { useRef } from "react";
import "../App.css";

function Input(props) {
  const inputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = inputRef.current.value;
    if (input.length === 5) {
      props.handleInput(input);
      inputRef.current.value = "";
    }
  };

  return (
    <form className="word-input-container" onSubmit={handleSubmit}>
      <input type="text" className="word-input" ref={inputRef} maxLength={5} />
      <button type="submit" className="word-submit">
        Submit
      </button>
    </form>
  );
}

export default Input;
