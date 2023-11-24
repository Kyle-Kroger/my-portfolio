"use client";

import styled from "styled-components";
import { helpers } from "../../styles";

const Footer = () => {
  return (
    <StyledWrapper>
      <Divider />
      <p>
        Made and designed by Kyle Kroger. Built in Visual Studio Code using
        Next.js and Styled Components, deployed with Vercel - © 2023
      </p>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.footer`
  ${helpers.flexCenter}
  flex-direction: column;
  width: 100%;
  min-height: 12vh;
  background-color: var(--color-primary-900);
  padding: var(--spacing-lg);

  font-size: var(--fz-sm);
  color: var(--color-grey-300);

  & > p {
    padding-bottom: var(--spacing-xs);
  }

  a {
    color: var(--color-primary-100);
  }
`;

const Divider = styled.div`
  width: 95%;
  max-width: 500px;
  height: 3px;
  background-color: var(--color-primary-100);
  margin-bottom: var(--spacing-md);
`;

export default Footer;
