//REMOVE font awesome for styled icons

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGit,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NavFooter = (props) => {
  return (
    <Wrapper>
      <a
        href="https://twitter.com/KS_Kroger"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter link"
      >
        <StyledIcon icon={faTwitter} />
      </a>

      <a
        href="https://github.com/Kyle-Kroger"
        target="_blank"
        rel="noreferrer"
        aria-label="Github link"
      >
        <StyledIcon icon={faGit} />
      </a>
      <a
        href="https://www.linkedin.com/in/kyle-kroger-5a70a4231/"
        target="_blank"
        rel="noreferrer"
        aria-label="Linkedin link"
      >
        <StyledIcon icon={faLinkedin} />
      </a>
      <a href="mailto: kyle.s.kroger@gmail.com" aria-label="Email link">
        <StyledIcon icon={faEnvelope} />
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
`;

const StyledIcon = styled(FontAwesomeIcon)`
  transition: color 150ms ease-in, transform 150ms ease-in;

  &:hover {
    color: white;
    transform: scale(1.2);
  }
`;

export default NavFooter;
