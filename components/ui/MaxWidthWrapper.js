"use client";

import styled from "styled-components";

const MaxWidthWrapper = (props) => {
  return <StyledWrapper>{props.children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  width: 100%;
  max-width: var(--content-max-width);
  margin: 0 auto;
`;

export default MaxWidthWrapper;
