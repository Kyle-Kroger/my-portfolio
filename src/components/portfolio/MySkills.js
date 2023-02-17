import styled from "styled-components/macro";
import { helpers } from "../../styles";
import { StyledSection, StyledSectionHeading } from "../ui";
import Skill from "./Skill";

const Inner = styled.div`
  ${helpers.maxWidthWrapper}
  display: flex;
  flex-direction: column;

  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-subtle);
  background-color: var(--color-primary-900T);

  p {
    font-family: "Roboto", "sans-serif";
    font-size: var(--fz-lg);
    color: var(--color-grey-200);
  }
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: left;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) 4px;
  margin: var(--spacing-md) 0;
  /* border: 1px solid var(--color-primary-700); */
  /* background-color: var(--color-primary-700); */
  border-radius: var(--radius-small);
`;

const MySkills = (props) => {
  return (
    <StyledSection color="url('/img/space-two.png')">
      <Inner>
        <StyledSectionHeading text="Skills" />
        <p>
          Throughout my time learning I have picked up many different skills
          both from my degree and self learning. Shout out to Josh Comeau's CSS
          for JS delveloper's course for being one of the most enjoyable and
          informational courses I have taken! Currently I am working on my
          Next.js, Prisma, and SQL skills by building a D&D spellbook app.
        </p>
        <SkillWrapper>
          <Skill name={"html5"} />
          <Skill name={"css"} />
          <Skill name={"javascript"} />
          <Skill name="typescript" />
          <Skill name={"React"} />
          <Skill name={"styledComponents"} />
          <Skill name={"Tailwind"} />
          <Skill name={"nextjs"} />
          <Skill name={"Mongodb"} />
          <Skill name={"nodejs"} />
          <Skill name={"express"} />
          <Skill name={"postgresql"} />
          <Skill name={"prisma"} />
          <Skill name={"git"} />
        </SkillWrapper>
      </Inner>
    </StyledSection>
  );
};

export default MySkills;
