import styled from "styled-components/macro";
import { animations, helpers } from "../../styles";
import { StyledButton } from "../ui";

const HEADER_TEXT = [
  "Hello, I'm Kyle!",
  "Looking to establish a web presence?",
  "I would love to help you!",
  "Shoot me an email for a consultation",
  "Looking forward to talking with you!",
];

const HeroText = ({ className, children }) => {
  return (
    <StyledWrapper className={className}>
      <h1>{HEADER_TEXT[0]}</h1>
      <p>
        I’m a software engineer that specializes in building (and occasionally
        designing) fullstack web applications. If your interested in building
        something together click the button to learn more!
      </p>
      <StyledButton width={"200px"}>Learn More</StyledButton>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 1100px;
  font-family: "Lora", serif;
  color: white;
  background-color: var(--color-primary-A900T);
  padding: 64px;
  border-radius: var(--radius-subtle);
  opacity: 0;
  animation: ${animations.fadeIn} 2s ease-in-out 500ms;
  animation-fill-mode: forwards;

  transition: all 400ms;

  p {
    margin: var(--spacing-lg) 0;
    font-size: var(--fz-lg);
    color: var(--color-primary-100);
  }
`;

export default HeroText;
