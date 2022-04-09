import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

const Hero = (props) => {
  const { url, height, onClick } = props;
  return (
    <Wrapper>
      <StyledHeroImage url={url} height={height} onClick={onClick} />
      <TextWrapper>
        <HeroText></HeroText>
      </TextWrapper>
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
