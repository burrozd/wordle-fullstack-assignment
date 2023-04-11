/* import React, { useState } from "react";
import AttemptOne from "./attemptOne";
import AttemptTwo from "./attemptTwo";
import AttemptThree from "./attemptThree";
import AttemptFour from "./attemptFour";
import AttemptFive from "./attemptFive";
import AttemptSix from "./attemptSix";
import Input from "./input";
import Output from "./Output";

function Board({ letters }) {
  const [activeAttempt, setActiveAttempt] = useState(0);
  const [attempts, setAttempts] = useState([
    [], // attempt one
    [], // attempt two
    [], // attempt three
    [], // attempt four
    [], // attempt five
    [], // attempt six
  ]);

  const handleInput = (input) => {
    const newAttempts = [...attempts];
    newAttempts[activeAttempt] = input.split("");
    setAttempts(newAttempts);
  };

  const setActive = (index) => {
    setActiveAttempt(index);
  };

  return (
    <div className="board">
      <h1>GAME</h1>
      <Input handleInput={handleInput} />
      <div className="attempts-container">
        <AttemptOne
          letters={letters}
          setAttempt={setAttempts[0]}
          setActive={setActive}
          active={activeAttempt === 0}
        />
        <AttemptTwo
          letters={letters}
          setAttempt={setAttempts[1]}
          setActive={setActive}
          active={activeAttempt === 1}
        />
        <AttemptThree
          letters={letters}
          setAttempt={setAttempts[2]}
          setActive={setActive}
          active={activeAttempt === 2}
        />
        <AttemptFour
          letters={letters}
          setAttempt={setAttempts[3]}
          setActive={setActive}
          active={activeAttempt === 3}
        />
        <AttemptFive
          letters={letters}
          setAttempt={setAttempts[4]}
          setActive={setActive}
          active={activeAttempt === 4}
        />
        <AttemptSix
          letters={letters}
          setAttempt={setAttempts[5]}
          setActive={setActive}
          active={activeAttempt === 5}
        />
      </div>
      <Output word={attempts[activeAttempt].join("")} />
    </div>
  );
}

export default Board;
 */

/* import React, { useState } from "react";
import AttemptFive from "./attemptFive";
import AttemptFour from "./attemptFour";
import AttemptOne from "./attemptOne";
import AttemptSix from "./attemptSix";
import AttemptThree from "./attemptThree";
import AttemptTwo from "./attemptTwo";

function Board({ letters }) {
  const [attemptOne, setAttemptOne] = useState([]);
  const [attemptTwo, setAttemptTwo] = useState([]);
  const [attemptThree, setAttemptThree] = useState([]);
  const [attemptFour, setAttemptFour] = useState([]);
  const [attemptFive, setAttemptFive] = useState([]);
  const [attemptSix, setAttemptSix] = useState([]);

  const handleAttemptOne = (attempt) => {
    setAttemptOne(attempt);
  };

  return (
    <div className="board">
      <h1>GAME</h1>
      <AttemptOne letters={letters} setAttempt={handleAttemptOne} />
      <AttemptTwo letters={letters} setAttempt={setAttemptTwo} />
      <AttemptThree letters={letters} setAttempt={setAttemptThree} />
      <AttemptFour letters={letters} setAttempt={setAttemptFour} />
      <AttemptFive letters={letters} setAttempt={setAttemptFive} />
      <AttemptSix letters={letters} setAttempt={setAttemptSix} />
    </div>
  );
}

export default Board;
 */

import React, { useState } from "react";
/* import Attempt from "./attempt"; */
import "../App.css";
import Input from "./input";
import Output from "./Output";
import { v4 as uuidv4 } from "uuid";

function Board({ letters }) {
  const [words, setWords] = useState([]);

  const handleInput = (word) => {
    setWords((prevWords) => [...prevWords, { id: uuidv4(), word: word }]);
  };

  return (
    <div className="board">
      <h1>GAME</h1>
      <Input handleInput={handleInput} />
      <Output enteredWords={words} />
    </div>
  );
}

export default Board;
