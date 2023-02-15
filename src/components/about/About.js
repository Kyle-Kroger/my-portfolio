import styled from "styled-components/macro";
import { QUERIES } from "../../constants";
import { helpers } from "../../styles";
import { StyledPhotoCard, StyledSection } from "../ui";
import StyledSectionHeading from "../ui/StyledSectionHeading";

const About = (props) => {
  return (
    <StyledSection color="linear-gradient(0deg, #0d1330, #0e112a, #0e0e24, #0d0c1f, #0a0919, #070613, #03030b, #000000)">
      <Inner>
        <FlexWrapper>
          <StyledSectionWrapper>
            <StyledSectionHeading text="More About Me" />
            <h4>I'm a Software Engineer located in St. Paul, MN</h4>
            <p>
              I've always enjoyed solving problems and building things. In
              middle school when I stumbled into coding which let me do both of
              those things I fell in love. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Laudantium animi rem tempora, maxime
              deserunt doloribus officia adipisci deleniti delectus, minima
              laboriosam atque, id cupiditate! Distinctio odit maxime autem
              deserunt sit!
            </p>
            <p>
              When I'm not coding or learning I enjoy reading, playing video
              games with friends, and creating worlds for D&D Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Vitae cum molestias
              doloremque ex eum laborum tenetur est enim recusandae totam iste
              aperiam praesentium dolorem vel, nulla corrupti neque beatae qui!
            </p>
          </StyledSectionWrapper>
          <PhotoCardWrapper>
            <StyledPhotoCard height="revert">
              <a href="#v">
                <img src="http://placekitten.com/400/550" alt="Kyle" />
              </a>
            </StyledPhotoCard>
          </PhotoCardWrapper>
        </FlexWrapper>
      </Inner>
    </StyledSection>
  );
};

const Inner = styled.div`
  ${helpers.maxWidthWrapper}
  display: flex;
  flex-direction: column;
  padding-top: 6rem;

  border-radius: var(--radius-subtle);
  /* background-color: var(--color-primary-700); */

  p {
    font-family: "Roboto", "sans-serif";
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  //${helpers.topBottomBorder("6px", "var(--color-primary-A1000)")}
  //${helpers.card}
`;

const StyledSectionWrapper = styled.section`
  padding: var(--spacing-lg);
  flex: 1;

  p {
    font-size: var(--fz-lg);
    color: var(--color-grey-200);
    padding: var(--spacing-md) 0;
  }
`;

const PhotoCardWrapper = styled.div`
  padding: var(--spacing-xl);
  max-width: 400px;

  @media ${QUERIES.tabetAndDown} {
    display: none;
  }
`;

export default About;
