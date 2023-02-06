import styled from "styled-components/macro";
import { QUERIES } from "../../constants";
import { helpers } from "../../styles";

const StyledButton = styled.a`
  ${helpers.flexCenter}
  background-color: var(--color-primary-300);
  color: white;
  font-size: var(--fz-sm);
  font-family: "Lora", serif;
  letter-spacing: 1px;
  border-radius: var(--radius-subtle);
  border: 1px solid var(--color-primary-300);
  padding: var(--spacing-sm) var(--spacing-xl);
  width: ${(p) => (p.width ? p.width : "100%")};

  transition: all 200ms ease-in-out;

  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);

  :active {
    box-shadow: inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  }

  :hover {
    filter: brightness(110%);
  }

  @media ${QUERIES.phone} {
    width: 100%;
  }
`;

export default StyledButton;
