import styled from "styled-components/macro";
import { QUERIES } from "../../constants";
import { helpers } from "../../styles";
import { StyledSection, StyledSectionHeading } from "../ui";

import Project from "./Project";

const ProjectGrid = (props) => {
  return (
    <StyledSection color="linear-gradient(0deg, rgb(5, 5, 5), rgba(3, 3, 11, 0.1), rgba(7, 6, 19, 0.1), rgba(10, 9, 25, 0.1), rgba(13, 12, 31, 0.1), rgba(14, 14, 36, 0.1), rgba(14, 17, 42, 0.1), rgba(13, 19, 48, 0)), url('/img/space-two.png')">
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
