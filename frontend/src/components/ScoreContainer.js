import React from "react";
import styled from "styled-components";

const Score = styled.h3`
  font-weight: 300;
`;

const ScoreCont = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export default function ScoreContainer({ score, message }) {
  return (
    <ScoreCont>
      <Score>Score: {score}</Score>
      <p>{message}</p>
    </ScoreCont>
  );
}
