import React from "react";
import Tile from "./tile";

function AttemptFour(props) {
  const { letters } = props;

  return (
    <div className="row">
      {letters &&
        letters.map((letter, index) => <Tile letter={letter} key={index} />)}
    </div>
  );
}

export default AttemptFour;
