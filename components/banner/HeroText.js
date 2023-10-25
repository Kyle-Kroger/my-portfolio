"use client";

import styled from "styled-components";
import { animations, helpers, QUERIES } from "../../styles";
import { StyledButton, StyledPhotoCard } from "../ui";

const HEADER_TEXT = [
  "Hi, I'm Kyle Kroger",
  "Looking to establish a web presence?",
  "I would love to help you!",
  "Shoot me an email for a consultation",
  "Looking forward to talking with you!",
];

const HeroText = ({ className, children }) => {
  return (
    <StyledWrapper className={className}>
      <h1>{HEADER_TEXT[0]}</h1>
      <h2>Software Developer</h2>
      <p>
        I specialize in building and designing applications that are accessible
        with a great user experience. I always love talking with new people and
        learning what they are working on, so feel free to shoot me a message!
      </p>
      <StyledButton href="#v" width="fit-content">
        Let's Connect!
      </StyledButton>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  height: 100%;
  font-family: "Barlow", sans-serif;
  padding: 3rem;
  border-radius: var(--radius-subtle);
  opacity: 0;
  animation: ${animations.fadeIn} 2s ease-in-out 500ms;
  animation-fill-mode: forwards;

  transition: all 400ms;

  h1 {
    letter-spacing: 0.05em;
  }

  p {
    font-family: "lora", serif;
    margin: 3rem 0 4rem;
    font-size: var(--fz-xl);
    color: var(--color-grey-100);
  }

  @media ${QUERIES.tabetAndDown} {
    padding: 3rem;
  }
`;

const Divider = styled.div`
  width: 90%;
  height: 2px;
  background-color: var(--color-primary-200);
  margin-top: 4px;
  margin-bottom: var(--spacing-md);
`;

export default HeroText;
