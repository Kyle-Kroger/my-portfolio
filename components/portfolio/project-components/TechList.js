import styled from "styled-components";
import { helpers } from "../../../styles";

const TechList = ({ techStack }) => {
  return (
    <Wrapper>
      {techStack.map((tech) => (
        <Tech key={tech}>{tech}</Tech>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  ${helpers.flexCenter}
  flex-wrap: wrap;
  column-gap: var(--spacing-xl);
  padding: var(--spacing-sm) 0;
`;

const Tech = styled.li`
  font-family: "Barlow", "sans-serif";
  color: var(--color-grey-200);
`;

export default TechList;
