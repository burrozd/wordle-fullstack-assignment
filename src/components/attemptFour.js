import React from "react";
import Tile from "./tile";

function AttemptFour() {
  return (
    <div className="row">
      <Tile letterPosition={0} numOfAttempt={3} />
      <Tile letterPosition={1} numOfAttempt={3} />
      <Tile letterPosition={2} numOfAttempt={3} />
      <Tile letterPosition={3} numOfAttempt={3} />
      <Tile letterPosition={4} numOfAttempt={3} />
    </div>
  );
}
export default AttemptFour;
