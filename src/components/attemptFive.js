import React from "react";
import Tile from "./tile";

function AttemptFive() {
  return (
    <div className="row">
      <Tile letterPosition={0} numOfAttempt={4} />
      <Tile letterPosition={1} numOfAttempt={4} />
      <Tile letterPosition={2} numOfAttempt={4} />
      <Tile letterPosition={3} numOfAttempt={4} />
      <Tile letterPosition={4} numOfAttempt={4} />
    </div>
  );
}
export default AttemptFive;
