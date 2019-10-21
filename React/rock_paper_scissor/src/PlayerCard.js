import React from "react";

// function to inline style the player-card with image
export const PlayerCard = ({ color, symbol }) => {
  const style = {
    backgroundColor: color,
    backgroundImage: "url(./img/" + symbol + ".png)"
  };
  return <div className="player-card" style={style}></div>;
};
