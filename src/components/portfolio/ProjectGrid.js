import styled from "styled-components/macro";
import { QUERIES } from "../../constants";
import { helpers } from "../../styles";
import { StyledSection, StyledSectionHeading } from "../ui";

import Project from "./Project";

const projects = [
  {
    title: "Playlist Manager for Spotify",
    desc: "Meow test. This is a project that allows one to build a playlist",
    techStack: ["TypeScript", "NextJs", "Styled Components", "MongoDB"],
    featured: true,
    imgSrc: "",
    imgDes: "",
    link: "",
    gitLink: "",
  },
  {
    title: "Othello",
    desc: "Meow test. This is a project that allows one to build a playlist",
    techStack: ["TypeScript", "NextJs", "Styled Components", "MongoDB"],
    featured: false,
    imgSrc: "",
    imgDes: "",
    link: "",
    gitLink: "",
  },
  {
    title: "The Black Lantern",
    desc: "Meow test. This is a project that allows one to build a playlist",
    featured: false,
    techStack: ["TypeScript", "NextJs", "Styled Components", "MongoDB"],
    imgSrc: "",
    imgDes: "",
    link: "",
    gitLink: "",
  },
];

const ProjectGrid = (props) => {
  return (
    <StyledSection color="var(--project-background)">
      <StyledSectionHeading text={"Portfolio"} sectionId="portfolio" />
      <GridWrapper>
        {projects.map((project, i) => {
          return (
            <StyledProject
              title={project.title}
              desc={project.desc}
              techStack={project.techStack}
              imgScr={project.imgSrc}
              imgDes={project.imgDes}
              link={project.link}
              gitLink={project.gitLink}
              featured={project.featured}
              className={project.featured ? "featured" : ""}
            />
          );
        })}
      </GridWrapper>
    </StyledSection>
  );
};

const GridWrapper = styled.section`
  ${helpers.maxWidthWrapper}
  margin-bottom: var(--spacing-xl);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  justify-items: stretch;

  @media ${QUERIES.tabetAndDown} {
    gap: var(--spacing-xl);
  }
`;

const StyledProject = styled(Project)`
  @media ${QUERIES.tabetAndDown} {
    grid-column: 1/-1;
  }

  &.featured {
    grid-column: 1/-1;
  }
`;

export default ProjectGrid;
