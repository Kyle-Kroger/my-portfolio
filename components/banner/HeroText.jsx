import styled from "styled-components";
import { animations, QUERIES } from "../../styles";
import { StyledButton } from "../ui";

const HeroText = ({ className, children }) => {
  return (
    <Wrapper className={className}>
      <h1>Hi, I'm Kyle Kroger</h1>
      <h2>Software Developer</h2>
      <p>
        I specialize in building and designing applications that are accessible
        with a great user experience. I always love talking with new people and
        learning what they are working on, so feel free to shoot me a message!
      </p>
      <StyledButton href="#v" width="fit-content">
        Let's Connect!
      </StyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  height: 100%;
  font-family: "Barlow", sans-serif;
  padding: 3rem;
  border-radius: var(--radius-subtle);
  animation: ${animations.fadeIn} 2s ease-in-out;

  transition: all 400ms;

  h1 {
    letter-spacing: 0.05em;
  }

  p {
    margin: 3rem 0 4rem;
    font-size: var(--fz-xl);
    color: var(--color-grey-100);
  }

  @media ${QUERIES.tabetAndDown} {
    padding: 3rem;
  }
`;

export default HeroText;
