"use client";
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";

import { Twitter, Github, Linkedin } from "@styled-icons/boxicons-logos";
import { Envelope } from "@styled-icons/fa-solid";

const NavFooter = (props) => {
  return (
    <Wrapper>
      <a
        href="https://twitter.com/KS_Kroger"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter link"
      >
        <Twitter />
      </a>

      <a
        href="https://github.com/Kyle-Kroger"
        target="_blank"
        rel="noreferrer"
        aria-label="Github link"
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/kyle-kroger-5a70a4231/"
        target="_blank"
        rel="noreferrer"
        aria-label="Linkedin link"
      >
        <Linkedin />
      </a>
      <a href="mailto: kyle.s.kroger@gmail.com" aria-label="Email link">
        <Envelope />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  font-size: var(--fz-xl);
  padding-top: var(--spacing-md);
  border-top: 1px solid;
  color: var(--color-primary-100);

  * {
    flex: 1;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${StyledIconBase} {
    transition: color 150ms ease-in, transform 150ms ease-in;
    max-width: 28px;
    max-height: 28px;

    &:hover {
      color: white;
      transform: scale(1.2);
    }
  }
`;

export default NavFooter;
