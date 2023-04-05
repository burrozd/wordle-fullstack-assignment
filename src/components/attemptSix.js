import React from "react";
import Tile from "./tile";

function AttemptSix() {
  return (
    <div className="row">
      <Tile letterPosition={1} numOfAttempt={5} />
      <Tile letterPosition={2} numOfAttempt={5} />
      <Tile letterPosition={3} numOfAttempt={5} />
      <Tile letterPosition={4} numOfAttempt={5} />
      <Tile letterPosition={5} numOfAttempt={5} />
    </div>
  );
}

export default AttemptSix;
