import React from "react";
import Tile from "./tile";

function AttemptOne() {
  return (
    <div className="row">
      <Tile letterPosition={0} numOfAttempt={0} />
      <Tile letterPosition={1} numOfAttempt={0} />
      <Tile letterPosition={2} numOfAttempt={0} />
      <Tile letterPosition={3} numOfAttempt={0} />
      <Tile letterPosition={4} numOfAttempt={0} />
    </div>
  );
}

export default AttemptOne;
