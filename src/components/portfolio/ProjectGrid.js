import styled from "styled-components/macro";
import { QUERIES } from "../../constants";
import { helpers } from "../../styles";
import { StyledSection, StyledSectionHeading } from "../ui";

import FeaturedProject from "./FeaturedProject";
import Project from "./Project";

const ProjectGrid = (props) => {
  return (
    <StyledSection color="var(--color-grey-700)">
      <StyledSectionHeading text={"Portfolio"} />
      <GridWrapper>
        <StyledFeaturedProject title="Spotify Playlist Manager"></StyledFeaturedProject>
        <StyledProject title="Project 1"></StyledProject>
        <StyledProject title="Project 2"></StyledProject>
      </GridWrapper>
    </StyledSection>
  );
};

const GridWrapper = styled.section`
  ${helpers.maxWidthWrapper}
  //padding: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  background-color: transparent;
  justify-items: center;

  @media ${QUERIES.tabetAndDown} {
    gap: var(--spacing-xl);
  }
`;

const StyledFeaturedProject = styled(FeaturedProject)`
  grid-column: 1/-1;

  @media ${QUERIES.laptopAndDown} {
  }
`;

const StyledProject = styled(Project)`
  @media ${QUERIES.tabetAndDown} {
    grid-column: 1/-1;
  }
`;

export default ProjectGrid;
