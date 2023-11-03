"use client";

import styled from "styled-components";
import { QUERIES } from "../../styles";

import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = (props) => {
  const { url, height } = props;
  return (
    <Wrapper>
      <StyledHeroImage url={url} height={height} />
      <HeroText />
    </Wrapper>
  );
};
const StyledHeroImage = styled(HeroImage)`
  position: absolute;
  top: 0;
`;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: var(--color-grey-900);

  display: flex;
  justify-content: center;

  @media ${QUERIES.tabetAndDown} {
    min-height: calc(100vh - var(--mobile-header-height));
  }
`;

export default Hero;
