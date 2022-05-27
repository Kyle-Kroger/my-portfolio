import styled from "styled-components/macro";
import { QUERIES } from "../../constants";
import { helpers } from "../../styles";

const StyledButton = styled.a`
  ${helpers.flexCenter}
  background-color: var(--color-secondary-400);
  color: white;
  font-size: var(--fz-sm);
  font-family: "Lora", serif;
  letter-spacing: 1px;
  font-weight: bold;
  border-radius: var(--radius-subtle);
  border: 2px solid var(--color-secondary-500);
  padding: var(--spacing-sm);
  width: ${(p) => (p.width ? p.width : "100%")};

  @media ${QUERIES.phone} {
    width: 100%;
  }
`;

export default StyledButton;
