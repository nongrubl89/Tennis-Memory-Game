import React from "react";
import styled from "styled-components";

const CardsDivContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
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
  padding-bottom: 2em;
  margin: 1em;
  margin-bottom: 8em;
`;

const ImageDiv = styled.img`
  z-index: 1;
  margin-bottom: -2em;
  height: 175px;
`;

const NameDiv = styled.h4`
  background: #c9f364;
  font-weight: 200;
  border-radius: 6px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  z-index: 2;
  /* margin: 0 !important; */
  padding: 1em;
  width: max-content;
  position: absolute;
  margin-left: 7em;
`;

const Blob = styled.svg`
  height: 250px;
  width: 250px;
  z-index: -1;
  position: absolute;
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
      <Blob
        viewBox="-20 60 200 170"
        xmlns="http://www.w3.org/2000/svg"
        y="1190"
        x="235"
      >
        <defs>
          <radialGradient id="rgrad">
            <stop offset="0%" stopColor="rgb(200,4,105)" stopOpacity="1.00" />
            <stop offset="19%" stopColor="rgb(175,76,113)" stopOpacity="1.00" />
            <stop
              offset="67%"
              stopColor="rgb(213,127,213)"
              stopOpacity="0.67"
            />
          </radialGradient>
        </defs>
        <path
          style={{ fill: "url(#rgrad)" }}
          d="M48.4,-39.9C62.3,-34.4,73.1,-17.2,74.7,1.7C76.4,20.6,69,41.1,55.1,55.4C41.1,69.7,20.6,77.7,6.6,71.2C-7.4,64.6,-14.9,43.4,-23.9,29.1C-33,14.9,-43.7,7.4,-46.4,-2.7C-49.1,-12.9,-43.9,-25.8,-34.8,-31.3C-25.8,-36.8,-12.9,-34.9,2.2,-37.1C17.2,-39.2,34.4,-45.4,48.4,-39.9Z"
          transform="translate(100 100)"
        />
      </Blob>
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
