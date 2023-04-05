import React /* , { useState } */ from "react";
import AttemptFive from "./attemptFive";
import AttemptFour from "./attemptFour";
import AttemptOne from "./attemptOne";
import AttemptSix from "./attemptSix";
import AttemptThree from "./attemptThree";
import AttemptTwo from "./attemptTwo";
/* import Tile from "./tile"; */

export const emptyBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

function Board() {
  return (
    <div className="board">
      <h1>GAME</h1>
      <AttemptOne />
      <AttemptTwo />
      <AttemptThree />
      <AttemptFour />
      <AttemptFive />
      <AttemptSix />
    </div>
  );
}

export default Board;
