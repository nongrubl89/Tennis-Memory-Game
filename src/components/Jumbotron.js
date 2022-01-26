import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 18em;
  background: #ce78cb;
  grid-gap: 1.5em;
  align-content: center;
  opacity: 75%;
`;

const Title = styled.h1`
  font-weight: 500;
  display: grid;
  justify-content: end;
  align-content: center;
`;

const Subtitle = styled.h4`
  font-weight: 200;
  width: 300px;
  align-content: center;
`;

export default function Jumbotron() {
  return (
    <Container>
      <Title>Tennis Memory Game</Title>
      <Subtitle>
        Earn points by clicking on an image but don't click on any card more
        than once. Choose between the top 10 ATP or WTA players.
      </Subtitle>
    </Container>
  );
}
