"use client";

import styled from "styled-components";
import { helpers, QUERIES } from "../../styles";
import { StyledSection, StyledSectionHeading } from "../ui";
import Project from "./Project";
import FeaturedProject from "./FeaturedProject";

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
        <PositionedFeaturedProject
          key={projects[0].title}
          title={projects[0].title}
          desc={projects[0].desc}
          techStack={projects[0].techStack}
          imgScr={projects[0].imgSrc}
          imgDes={projects[0].imgDes}
          link={projects[0].link}
          gitLink={projects[0].gitLink}
          featured={projects[0].featured}
          className={projects[0].featured ? "featured" : ""}
        />
        {projects.map((project, i) => {
          return (
            <StyledProject
              key={project.title}
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

const PositionedFeaturedProject = styled(FeaturedProject)`
  grid-column: 1/-1;

  @media ${QUERIES.tabetAndDown} {
    margin: 0 auto;
  }
`;

const StyledProject = styled(Project)`
  @media ${QUERIES.tabetAndDown} {
    grid-column: 1/-1;
    margin: 0 auto;
  }

  &.featured {
    grid-column: 1/-1;
  }
`;

export default ProjectGrid;
