"use client";

import styled from "styled-components";
import { helpers, QUERIES } from "../../styles";
import { StyledSection, StyledSectionHeading } from "../ui";
import Project from "./Project";
import FeaturedProject from "./FeaturedProject";
import projects from "./project-data";

const ProjectGrid = (props) => {
  return (
    <StyledSection color="var(--project-background)">
      <StyledSectionHeading text={"Portfolio"} sectionId="portfolio" />
      <GridWrapper>
        {projects.map((project, i) => {
          if (project.featured) {
            return (
              <PositionedFeaturedProject
                key={project.title}
                title={project.title}
                desc={project.desc}
                techStack={project.techStack}
                imgScr={project.imgSrc}
                imgDes={project.imgDes}
                link={project.link}
                gitLink={project.gitLink}
              />
            );
          } else {
            return (
              <PositionedProject
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
          }
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

const PositionedProject = styled(Project)`
  @media ${QUERIES.tabetAndDown} {
    grid-column: 1/-1;
    margin: 0 auto;
  }

  &.featured {
    grid-column: 1/-1;
  }
`;

export default ProjectGrid;
