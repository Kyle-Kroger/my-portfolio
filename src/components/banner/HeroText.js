import styled from "styled-components/macro";
import { animations, helpers } from "../../styles";
import { StyledButton } from "../ui";

const HeroText = ({ className, children }) => {
  return (
    <StyledWrapper className={className}>
      <h1>Hey I'm Kyle!</h1>
      <h1>Hello and Welcome!</h1>
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
  max-width: 900px;
  font-family: "Lora", serif;
  color: white;
  background-color: var(--color-primary-A900T);
  padding: 64px;
  border-radius: var(--radius-subtle);
  ${helpers.topBottomBorder("4px", "var(--color-secondary-600)")}
  opacity: 0;
  animation: ${animations.fadeIn} 2s ease-in-out 500ms;
  animation-fill-mode: forwards;
  h1 {
    text-transform: capitalize;
  }

  p {
    margin: var(--spacing-lg) 0;
    font-size: var(--fz-lg);
    color: var(--color-primary-100);
  }
`;

export default HeroText;
