import React from "react";
import Player from "./Player";
import players from "./players";
import "./index.css";

const PlayersList = () => {
  return (
    <div className="players-container">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
