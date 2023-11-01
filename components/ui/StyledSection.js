"use client";

import styled from "styled-components";
import { QUERIES } from "../../styles";

const StyledSection = styled.section`
  padding: var(--spacing-xxl) var(--spacing-md);
  width: 100%;
  background: ${(p) => (p.color ? p.color : "transparent")};

  @media ${QUERIES.tabetAndDown} {
    padding: var(--spacing-xxl) var(--spacing-md);
  }
`;

export default StyledSection;
