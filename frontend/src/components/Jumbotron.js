import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  background: #ce78cb;
  align-items: center;
  opacity: 75%;
  padding: 4rem 2rem;
  position: relative;
  border-bottom: 0px;
  overflow: hidden;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 3rem;
  justify-self: center;
`;

const Subtitle = styled.h4`
  font-weight: 1rem;
  font-weight: 400;
`;

const BorderContainer = styled.div`
  color: #fafafa;
  left: 0;
  right: 0;
  bottom: -5px;
  transform: scaleX(-1);
  position: absolute;
  /* margin-bottom: 1600px; */
`;

const Border = styled.svg`
  height: 50px;
  width: calc(100% + 1.3px);
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  min-width: 100%;
`;

export default function Jumbotron() {
  return (
    <Container>
      <Title>Tennis Memory Game</Title>
      <Subtitle>
        Earn points by clicking on an image but don't click on any card more
        than once. Choose between the top 10 ATP or WTA players.
      </Subtitle>
      <BorderContainer>
        <Border
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            style={{ fill: "#fafafa" }}
            d="M1200 100H0V0l400 77.2L1200 0z"
          ></path>
        </Border>
      </BorderContainer>
    </Container>
  );
}
