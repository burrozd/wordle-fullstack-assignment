import React, { useState } from "react";
import Tile from "./tile";

export const emptyBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

function Board() {
  const [board, setBoard] = useState(emptyBoard);

  return (
    <div className="board">
      <h1>GAME</h1>
      <div className="row">
        <Tile letterPosition={0} numOfAttempt={0} />
        <Tile letterPosition={1} numOfAttempt={0} />
        <Tile letterPosition={2} numOfAttempt={0} />
        <Tile letterPosition={3} numOfAttempt={0} />
        <Tile letterPosition={4} numOfAttempt={0} />
      </div>
      <div className="row">
        <Tile letterPosition={0} numOfAttempt={1} />
        <Tile letterPosition={1} numOfAttempt={1} />
        <Tile letterPosition={2} numOfAttempt={1} />
        <Tile letterPosition={3} numOfAttempt={1} />
        <Tile letterPosition={4} numOfAttempt={1} />
      </div>
      <div className="row">
        <Tile letterPosition={0} numOfAttempt={2} />
        <Tile letterPosition={1} numOfAttempt={2} />
        <Tile letterPosition={2} numOfAttempt={2} />
        <Tile letterPosition={3} numOfAttempt={2} />
        <Tile letterPosition={4} numOfAttempt={2} />
      </div>
      <div className="row">
        <Tile letterPosition={0} numOfAttempt={3} />
        <Tile letterPosition={1} numOfAttempt={3} />
        <Tile letterPosition={2} numOfAttempt={3} />
        <Tile letterPosition={3} numOfAttempt={3} />
        <Tile letterPosition={4} numOfAttempt={3} />
      </div>
      <div className="row">
        <Tile letterPosition={0} numOfAttempt={4} />
        <Tile letterPosition={1} numOfAttempt={4} />
        <Tile letterPosition={2} numOfAttempt={4} />
        <Tile letterPosition={3} numOfAttempt={4} />
        <Tile letterPosition={4} numOfAttempt={4} />
      </div>
      <div className="row">
        <Tile letterPosition={1} numOfAttempt={5} />
        <Tile letterPosition={2} numOfAttempt={5} />
        <Tile letterPosition={3} numOfAttempt={5} />
        <Tile letterPosition={4} numOfAttempt={5} />
        <Tile letterPosition={5} numOfAttempt={5} />
      </div>
    </div>
  );
}

export default Board;
