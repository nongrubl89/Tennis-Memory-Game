import React from "react";
import { useState, useEffect } from "react";
import CardContainer from "./CardContainer";
import ScoreContainer from "./ScoreContainer";
import Jumbotron from "./Jumbotron";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 
  body {
    font-family: 'Outfit', sans-serif;
  }
  `;

const Select = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px #ce78cb solid;
  border-radius: 6px;
  justify-items: center;
  margin: 1em;
  cursor: pointer;
  justify-self: center;
  width: 100px;
  /* padding: 0.5em; */
`;

const Wta = styled.div`
  background-color: ${(props) =>
    props.gender === "female" ? `#ce78cb` : `none`};
  /* height: 100%;
  
  width: 100%; */
  padding: 0.5em;
  border-radius: 6px 0 0 6px;
  cursor: pointer;
`;

const Atp = styled.div`
  background: ${(props) => (props.gender === "male" ? `#ce78cb` : `none`)};
  /* height: 100%;
  width: 100%; */
  padding: 0.5em;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  border-right: 5px solid #ce78cb;
`;

const Container = styled.div`
  display: grid;
  /* background: #fafafa;
  z-index: -200; */
  position: relative;
`;

export default function BoardContainer() {
  const [malePlayers, setMalePlayers] = useState([]);
  const [femalePlayers, setFemalePlayers] = useState([]);
  const [playerArray, setPlayerArray] = useState([]);
  const [gender, setGender] = useState("male");
  const [score, setScore] = useState(0);
  const [scoreMessage, setScoreMessage] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  //   const [fill, isFill] =setState()

  useEffect(() => {
    async function getData() {
      Promise.all([
        axios.get("http://localhost:4000/females"),
        axios.get("http://localhost:4000/males"),
      ]).then(
        ([femaleRes, maleRes]) => {
          console.log(femaleRes);
          console.log(maleRes);
          setIsLoaded(true);
          setFemalePlayers(femaleRes.data.players);
          setMalePlayers(maleRes.data.players);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    }
    getData();
  }, []);

  // the source for this function:https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  const onCardClick = (pName) => {
    // console.log(p);
    if (gender === "male") {
      const shuffledArray = shuffle(malePlayers);
      setMalePlayers([...shuffledArray]);
    } else if (gender === "female") {
      const shuffledArray = shuffle(femalePlayers);
      setFemalePlayers([...shuffledArray]);
    }
    setPlayerArray(playerArray.concat(pName));
    if (playerArray.includes(pName)) {
      setScore(0);
      setScoreMessage("Game Over!");
      setPlayerArray([]);
    } else if (playerArray.length > 0 && !playerArray.includes(pName)) {
      setScore((prevScore) => score + 1);
      setScoreMessage("Great Job! +1 point!");
    }

    console.log(playerArray);
  };

  useEffect(() => console.log(playerArray));

  const test = () => {
    console.log("clicked");
  };

  return (
    <Container>
      <Jumbotron />
      <GlobalStyles />
      {/* <button id="female" onClick={(e) => setGender(e.target.id)}>
        Females
      </button>
      <button id="male" onClick={(e) => setGender(e.target.id)}>
        Males
      </button> */}

      <Select>
        <Wta
          id="female"
          onClick={(e) => setGender(e.target.id)}
          gender={gender}
        >
          WTA
        </Wta>
        <Atp id="male" onClick={(e) => setGender(e.target.id)} gender={gender}>
          ATP
        </Atp>
      </Select>
      <ScoreContainer score={score} message={scoreMessage} />
      <CardContainer
        malePlayers={malePlayers}
        femalePlayers={femalePlayers}
        onCardClick={onCardClick}
        gender={gender}
        isLoaded={isLoaded}
        error={error}
      />
    </Container>
  );
}
