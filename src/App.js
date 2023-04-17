import Nav from "./components/nav";
import "./App.css";

import Board from "./components/board";
/* import Input from "./components/input"; */
import React, { useState } from "react";

function App() {
  const [letters /* , setLetters */] = useState([]);

  /* const handleInput = (input) => {
    if (/^[A-Za-z]+$/.test(input)) {
      setLetters(input.split(""));
    } else {
      alert("Please enter only letters!");
    }
  }; */

  return (
    <div className="App">
      <Nav />
      {/* <Input handleInput={handleInput} /> */}
      <Board letters={letters} />
    </div>
  );
}

export default App;
