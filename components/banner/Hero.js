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
  min-height: ${(p) => (p.height ? p.height : "100vh")};
  background-color: var(--color-grey-900);

  display: flex;
  justify-content: center;

  @media ${QUERIES.tabetAndDown} {
    min-height: calc(100vh - 52px);
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: var(--spacing-lg) var(--spacing-md);
`;

export default Hero;
