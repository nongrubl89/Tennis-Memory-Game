import React from "react";
import styled from "styled-components";
import Blob from "./Blob";
import Blob2 from "./Blob2";

const CardsDivContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  background: #fafafa;
  z-index: -5;
  position: relative;
`;

const CardsDiv = styled.div`
  margin: 10px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  grid-column: 2/3;
`;

const PlayerCard = styled.div`
  /* padding-bottom: 2em; */
  /* padding-top: 2em; */
  margin: 1em;
  z-index: -4;
  display: grid;
  position: relative;
  height: 200px;
  margin-bottom: 1em;
  background: white;
  border-radius: 6px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  padding: 1em;
`;

const ImageDiv = styled.img`
  z-index: 2;
  margin-bottom: -2em;
  height: 175px;
  display: grid;
  justify-self: center;
`;

const NameDiv = styled.h4`
  background: #c9f364;
  font-weight: 200;
  border-radius: 6px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
  padding: 1em;
  width: max-content;
  position: absolute;
  justify-self: center;
  align-self: end;
`;

export default function CardContainer({
  malePlayers,
  onCardClick,
  gender,
  femalePlayers,
  error,
  isLoaded,
}) {
  let cards;
  if (gender === "male") {
    cards = malePlayers;
  } else if (gender === "female") {
    cards = femalePlayers;
  }
  const playerCards = cards.map((player, i) => (
    <PlayerCard
      data-nav={player.name}
      onClick={() => onCardClick(player.name)}
      key={i}
      id={player.name}
    >
      {i % 2 === 0 ? <Blob /> : <Blob2 />}

      <ImageDiv
        src={`http://localhost:4000/public/${player.image[0].filename}`}
        alt="player serving"
      ></ImageDiv>
      <NameDiv>{player.name}</NameDiv>
    </PlayerCard>
  ));
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <CardsDivContainer>
        <CardsDiv>{playerCards}</CardsDiv>
      </CardsDivContainer>
    );
  }
}
