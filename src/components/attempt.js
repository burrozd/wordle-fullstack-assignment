/* import React, { useState } from "react";
import Tile from "./tile";

function Attempt({ letters, selectedAttempt, setSelectedAttempt }) {
  const [attempts, setAttempts] = useState({
    attempt1: "",
    attempt2: "",
    attempt3: "",
    attempt4: "",
    attempt5: "",
    attempt6: "",
  });

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedAttempt(value);
  };

  const handleWordSubmit = (event) => {
    event.preventDefault();
    if (attempts[selectedAttempt].length === 5) {
      setAttempts((prevState) => ({
        ...prevState,
        [selectedAttempt]: attempts[selectedAttempt],
      }));
    }
  };

  return (
    <div className="row">
      {letters.map((letter, index) => (
        <Tile letter={letter} key={index} />
      ))}
      <div className="word-input-container">
        <select value={selectedAttempt} onChange={handleChange}>
          <option value="">Choose attempt</option>
          {Object.keys(attempts).map((attempt, index) => (
            <option value={attempt} key={index}>
              {attempt}
            </option>
          ))}
        </select>
        {selectedAttempt && (
          <form className="word-form" onSubmit={handleWordSubmit}>
            <input
              type="text"
              className="word-input"
              maxLength={5}
              value={attempts[selectedAttempt]}
              onChange={(event) =>
                setAttempts({
                  ...attempts,
                  [selectedAttempt]: event.target.value,
                })
              }
            />
            <button type="submit" className="word-submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Attempt;
 */

/* import React, { useState } from "react";
import Tile from "./tile";

function Attempt({
  letters,
  selectedAttempt,
  setSelectedAttempt,
  index,
  setIndex,
}) {
  const [attempts, setAttempts] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setSelectedAttempt(value);
  };

  const handleWordSubmit = (event) => {
    event.preventDefault();
    const word = attempts[index] || "";
    if (word.length === 5) {
      setAttempts((prevAttempts) => {
        const newAttempts = [...prevAttempts];
        newAttempts[index] = word;
        if (index === newAttempts.length - 1) {
          newAttempts.push("");
          setIndex(index + 1);
        }
        return newAttempts;
      });
    }
  };

  return (
    <div className="row">
      {letters.map((letter, index) => (
        <Tile letter={letter} key={index} />
      ))}
      <div className="word-input-container">
        <form className="word-form" onSubmit={handleWordSubmit}>
          <input
            type="text"
            className="word-input"
            maxLength={5}
            value={attempts[index] || ""}
            onChange={(event) => {
              const word = event.target.value;
              setAttempts((prevAttempts) => {
                const newAttempts = [...prevAttempts];
                newAttempts[index] = word;
                return newAttempts;
              });
            }}
          />
          <button type="submit" className="word-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Attempt;
 */

import React, { useState } from "react";
import Tile from "./tile";
import { v4 as uuidv4 } from "uuid";
import "../App.css";

function Attempt({
  letters,
  selectedAttempt,
  setSelectedAttempt,
  index,
  setIndex,
  enteredWords,
  setEnteredWords,
}) {
  const [attempts, setAttempts] = useState([]);
  const [numAttempts, setNumAttempts] = useState(0);
  const isMaxAttemptsReached = numAttempts >= 6;

  const handleWordSubmit = (event) => {
    event.preventDefault();
    const word = attempts[index] || "";
    if (word.length === 5 && numAttempts < 6) {
      setAttempts((prevAttempts) => {
        const newAttempts = [...prevAttempts];
        newAttempts[index] = word;
        if (index === newAttempts.length - 1) {
          const newNumAttempts = numAttempts + 1;
          setNumAttempts(newNumAttempts);
          if (newNumAttempts === 6) {
            setEnteredWords((prevWords) => [
              ...prevWords,
              { id: uuidv4(), word: newAttempts.join("") },
            ]);
            setIndex(0);
            setAttempts([]);
            setNumAttempts(0);
          } else {
            newAttempts.push("");
            setIndex(index + 1);
          }
        }
        return newAttempts;
      });
    }
  };

  console.log("outside of function");

  return (
    <div className="row">
      {letters.map((letter, index) => (
        <Tile letter={letter} key={index} />
      ))}
      <div className="word-input-container">
        <form className="word-form" onSubmit={handleWordSubmit}>
          <input
            type="text"
            className="word-input"
            maxLength={5}
            value={attempts[index] || ""}
            onChange={(event) => {
              const word = event.target.value;
              setAttempts((prevAttempts) => {
                const newAttempts = [...prevAttempts];
                newAttempts[index] = word;
                return newAttempts;
              });
            }}
            disabled={isMaxAttemptsReached}
          />
          <button
            type="submit"
            className="word-submit"
            disabled={isMaxAttemptsReached}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Attempt;
