import styled from "styled-components/macro";
import { QUERIES } from "../../constants";
import { helpers } from "../../styles";
import { StyledSection, StyledSectionHeading } from "../ui";

import Project from "./Project";

const ProjectGrid = (props) => {
  return (
    <StyledSection color="var(--project-background)">
      <StyledSectionHeading text={"Portfolio"} />
      <GridWrapper>
        <StyledProject
          title="Spotify Playlist Manager"
          featured
          className="featured"
        ></StyledProject>
        <StyledProject title="Project 1"></StyledProject>
        <StyledProject title="Project 2"></StyledProject>
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
  justify-items: center;

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
