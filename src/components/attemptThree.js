import React from "react";
import Tile from "./tile";

function AttemptThree() {
  return (
    <div className="row">
      <Tile letterPosition={0} numOfAttempt={2} />
      <Tile letterPosition={1} numOfAttempt={2} />
      <Tile letterPosition={2} numOfAttempt={2} />
      <Tile letterPosition={3} numOfAttempt={2} />
      <Tile letterPosition={4} numOfAttempt={2} />
    </div>
  );
}
export default AttemptThree;
