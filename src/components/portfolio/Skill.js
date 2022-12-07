import styled from "styled-components/macro";
import { ReactLogo } from "@styled-icons/fa-brands";
import helpers from "../../styles/helpers";

const ICONS = {
  react: {
    name: "React",
    icon: () => {
      return <ReactLogo size={32} color={"white"} />;
    },
  },
};

const Wrapper = styled.div`
  display: flex;
  ${helpers.flexCenter}
  gap: 4px;
  padding: 2px var(--spacing-sm);
  border-radius: var(--radius-subtle);
  border: 1px solid var(--color-primary-500);
  background-color: var(--color-primary-600);
`;

const IconWrapper = styled.div`
  ${helpers.flexCenter}

  width: 36px;
  height: 36px;
`;

const Skill = ({ name }) => {
  if (!ICONS[name.toLowerCase()]) {
    return <h5>Icon Not Found</h5>;
  }
  return (
    <Wrapper>
      <IconWrapper>{ICONS[name.toLowerCase()].icon()}</IconWrapper>
      <h5>{ICONS[name.toLowerCase()].name}</h5>
    </Wrapper>
  );
};

export default Skill;
