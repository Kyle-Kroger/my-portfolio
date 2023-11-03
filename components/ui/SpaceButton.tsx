"use client";

import styled, { keyframes } from "styled-components";

interface Props {
  $primaryColor?: string;
}

const gradient = keyframes`
  0% {
      background-position: 0% 50%;
      
    }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
`;

const SpaceButton = styled.a<Props>`
  cursor: pointer;
  background-color: ${(p) =>
    p.$primaryColor ? p.$primaryColor : "hsl(230, 39%, 37%);"};
  background: linear-gradient(-45deg, #1b2164, #6a33a8, #1b2164, #3319a7);
  background-size: 400% 400%;
  background-position: 0% 50%;
  color: #fff;
  border-radius: 8px;
  padding: 1rem 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  letter-spacing: 1.2px;
  font-family: "Barlow", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  width: fit-content;

  border: 2px solid #030927;

  transition: transform 300ms ease-in-out;

  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12), 0 0 20px #3f1292;

  &:hover {
    animation: ${gradient} 10s ease infinite;

    transform: scale(110%);
  }

  &:focus {
    outline: 2px solid #fff;
    outline-offset: 5px;
  }
`;

export default SpaceButton;
