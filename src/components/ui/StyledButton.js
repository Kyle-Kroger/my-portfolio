import styled from "styled-components/macro";
import { helpers } from "../../styles";

const StyledButton = styled.a`
  ${helpers.flexCenter}
  background-color: var(--color-secondary-400);
  color: var(--color-primary-100);
  font-size: var(--fz-sm);
  letter-spacing: 1px;
  font-weight: bold;
  border-radius: var(--radius-small);
  border: 4px solid var(--color-secondary-500);
  padding: var(--spacing-sm);
  width: ${(p) => (p.width ? p.width : "100%")};
`;

export default StyledButton;
