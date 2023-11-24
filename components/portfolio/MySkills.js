"use client";

import styled from "styled-components";
import { helpers } from "../../styles";
import { StyledSection, StyledSectionHeading, GlassWrapper } from "../ui";
import Skill from "./Skill";

const MySkills = (props) => {
  return (
    <StyledSection color="url('/img/space-two.webp')">
      <StyledSectionHeading text="Skills" />
      <Inner>
        <p>
          While I have coded in quite a few other languages these are the skills
          that I feel most proficient with. Currently I am working on my
          Next.js, TypeScript, Prisma, and SQL skills by building a D&D
          initative-tracker app in my free time.
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

const Inner = styled.div`
  ${helpers.maxWidthWrapper}
  display: flex;
  flex-direction: column;

  p {
    font-family: "Roboto", "sans-serif";
    font-size: var(--fz-md);
  }
`;

const SkillWrapper = styled(GlassWrapper)`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  justify-content: left;
  gap: var(--spacing-sm);
  padding: var(--spacing-md) 4px;
  margin: var(--spacing-md) 0;
`;

export default MySkills;
