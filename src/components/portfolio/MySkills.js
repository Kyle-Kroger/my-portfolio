import styled from "styled-components/macro";
import { helpers } from "../../styles";
import { StyledSection, StyledSectionHeading } from "../ui";
import Skill from "./Skill";

const Inner = styled.div`
  ${helpers.maxWidthWrapper}
  display: flex;
  flex-direction: column;

  padding: 0 var(--spacing-lg);
  border-radius: var(--radius-subtle);
  background-color: var(--color-primary-900);

  p {
    font-family: "Roboto", "sans-serif";
  }
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
`;

const MySkills = (props) => {
  return (
    <StyledSection color="var(--color-primary-900)">
      <StyledSectionHeading text="My Skills" />
      <Inner>
        <p>
          Throughout my time learning I have picked up many different skills
          both from my degree and self learning. Shout out to Josh Comeau's CSS
          for JS delveloper's course for being one of the most enjoyable and
          informational courses I have taken! Currently I am working on my
          Next.js, Prisma, and SQL skills by building a D&D spellbook app.
        </p>
        <SkillWrapper>
          <Skill name={"React"} />
          <Skill name={"React"} />
          <Skill name={"React"} />
          <Skill name={"React"} />
          <Skill name={"React"} />
          <Skill name={"React"} />
          <Skill name={"React"} />
          <Skill name={"React"} />
          <Skill name={"React"} />
          <Skill name={"React"} />
          <Skill name={"React"} />
          <Skill name={"React"} />
        </SkillWrapper>
      </Inner>
    </StyledSection>
  );
};

export default MySkills;
