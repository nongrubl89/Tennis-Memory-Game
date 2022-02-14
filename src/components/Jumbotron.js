import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  background: #ce78cb;
  /* grid-gap: 1.5em; */
  align-items: center;
  opacity: 75%;
  padding: 4rem 2rem;
  /* width: 100vw; */
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 3rem;
  justify-self: center;
  /* display: grid;
  justify-content: end;
  align-content: center; */
`;

const Subtitle = styled.h4`
  font-weight: 200;
  /* width: 300px;
  align-content: center; */
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
