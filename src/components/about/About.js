import styled from "styled-components/macro";
import { QUERIES } from "../../constants";
import { helpers } from "../../styles";
import { StyledPhotoCard, StyledSection } from "../ui";
import StyledSectionHeading from "../ui/StyledSectionHeading";

const About = (props) => {
  return (
    <ImageSection color="linear-gradient(0deg, rgba(3, 3, 5, 1) 1%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('/img/space-three.png')">
      <Inner>
        <FlexWrapper>
          <StyledSectionWrapper>
            <StyledSectionHeading text="More About Me" sectionId="about" />
            <p>Hi! I'm a Software Engineer located in St. Paul, MN</p>
            <p>
              Every since I was little I have always enjoyed building things and
              solving problems. Building applications that focus on
              responsiveness and user experience is what's important to me.
            </p>
            <p>
              I have an associate of applied science in software development
              from DCTC.
            </p>
            <p>
              When I'm not coding or learning I enjoy reading, playing video
              games with friends, and creating worlds and stories for my d&d
              campaign. Feel free to contact me with any questions or even just
              to say hello. I always enjoy hearing from new people and learning
              what they are working on!
            </p>
          </StyledSectionWrapper>
          <PhotoCardWrapper>
            <StyledPhotoCard height="revert">
              <img src="http://placekitten.com/400/550" alt="Kyle" />
            </StyledPhotoCard>
          </PhotoCardWrapper>
        </FlexWrapper>
      </Inner>
    </ImageSection>
  );
};

const ImageSection = styled(StyledSection)`
  background-size: stretch;
  background-position: 30% 35%;
`;

const Inner = styled.div`
  ${helpers.maxWidthWrapper}
  display: flex;
  flex-direction: column;

  border-radius: var(--radius-subtle);

  p {
    font-family: "Roboto", "sans-serif";
  }
`;

const FlexWrapper = styled.div`
  display: flex;
`;

const StyledSectionWrapper = styled.section`
  flex: 1;

  p:first-of-type {
    font-size: var(--fz-xl);
    color: white;
  }

  p {
    color: var(--color-grey-200);
  }

  p,
  h4 {
    padding: var(--spacing-sm) var(--spacing-lg);
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
