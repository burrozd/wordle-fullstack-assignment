import React from "react";
import Tile from "./tile";

function AttemptTwo() {
  return (
    <div className="row">
      <Tile letterPosition={0} numOfAttempt={1} />
      <Tile letterPosition={1} numOfAttempt={1} />
      <Tile letterPosition={2} numOfAttempt={1} />
      <Tile letterPosition={3} numOfAttempt={1} />
      <Tile letterPosition={4} numOfAttempt={1} />
    </div>
  );
}

export default AttemptTwo;
