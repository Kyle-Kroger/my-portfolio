import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const StyledSection = styled.section`
  padding: var(--spacing-xxl) var(--spacing-md);
  width: 100%;
  background: ${(p) => (p.color ? p.color : "transparent")};

  @media ${QUERIES.tabetAndDown} {
    padding: var(--spacing-xxl) 0;
  }
`;

export default StyledSection;
