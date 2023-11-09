"use client";

import styled from "styled-components";
import { helpers } from "../../styles";

const StyledSectionHeading = (props) => {
  const { text, sectionId } = props;
  return (
    <StyledWrapper>
      <h2 id={sectionId}>{text}</h2>
      <Divider />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  ${helpers.maxWidthWrapper}
  display: flex;
  justify-content: left;
  flex-direction: column;
  text-transform: capitalize;
  font-family: "Lora", "serif";
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--color-glass-border);
  margin-top: 4px;
  margin-bottom: var(--spacing-md);
`;

export default StyledSectionHeading;
