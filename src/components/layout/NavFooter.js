import styled from "styled-components/macro";

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
      <StyledIcon icon={faTwitter} />
      <StyledIcon icon={faGit} />
      <StyledIcon icon={faLinkedin} />
      <a href="#contact">
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
