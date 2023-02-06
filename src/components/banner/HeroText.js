import styled from "styled-components/macro";
import { animations, helpers } from "../../styles";
import { StyledButton } from "../ui";

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
      {/* Needs a little headshot picture up here */}
      <h1>{HEADER_TEXT[0]}</h1>
      <p>
        I’m a software engineer that specializes in building and occasionally
        designing fullstack web applications. If you're interested in building
        something together click the button to learn more!
      </p>
      <Divider />
      <StyledButton href="#v" width="40%">
        Let's Connect!
      </StyledButton>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 1150px;
  font-family: "Roboto", sans-serif;
  background-color: #0f0d2c;
  padding: 3rem;
  border-radius: var(--radius-large);
  animation: ${animations.fadeIn} 2s ease-in-out 500ms;
  animation-fill-mode: forwards;

  transition: all 400ms;

  h1 {
    letter-spacing: 0.065em;
  }

  p {
    font-family: "lora", serif;
    margin: var(--spacing-md) 0;
    font-size: var(--fz-lg);
    color: var(--color-grey-100);
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 3px;
  background-color: var(--color-primary-700);
  margin-top: 4px;
  margin-bottom: var(--spacing-md);
`;

export default HeroText;
