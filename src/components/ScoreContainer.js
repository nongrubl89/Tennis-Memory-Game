import React from "react";

export default function ScoreContainer({ score, message }) {
  return (
    <div>
      <h3>{score}</h3>
      <p>{message}</p>
    </div>
  );
}
