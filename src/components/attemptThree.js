import React from "react";
import Tile from "./tile";

function AttemptThree(props) {
  const { letters, row } = props;

  return (
    <div className="row">
      {letters &&
        letters.map((letter, index) => {
          const tileIndex = (row - 1) * 5 + index;
          return <Tile letter={letter} key={tileIndex} />;
        })}
    </div>
  );
}

export default AttemptThree;
