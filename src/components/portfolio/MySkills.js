import styled from "styled-components/macro";
import { StyledSection, StyledSectionHeading } from "../ui";

const MySkills = (props) => {
  return (
    <StyledSection color="var(--color-primary-A1100)">
      <StyledSectionHeading text="My Skills" />
      <p>Here are some of the skills that I have learned:</p>
    </StyledSection>
  );
};

export default MySkills;
