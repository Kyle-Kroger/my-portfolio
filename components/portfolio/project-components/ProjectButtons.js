import styled from "styled-components";
import Link from "next/link";
import { Github } from "@styled-icons/boxicons-logos";

import { SpaceButton } from "../../ui";

const ProjectButtons = ({ link, gitLink }) => {
  return (
    <Wrapper>
      <SpaceButton
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label="Project site link"
      >
        Visit the Site
      </SpaceButton>
      <Link
        href={gitLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Github link"
      >
        <GithubLink />
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-lg);
  width: 100%;
  padding: var(--spacing-md) var(--spacing-sm);
`;

const GithubLink = styled(Github)`
  transition: color 150ms ease-in, transform 150ms ease-in;
  width: 40px;
  height: 40px;

  &:hover {
    color: white;
    transform: scale(1.2);
  }
`;

export default ProjectButtons;
