"use client";

import styled from "styled-components";
import { QUERIES, helpers } from "../../styles";
import {
  StyledPhotoCard,
  StyledSection,
  StyledSectionHeading,
  GlassWrapper,
} from "../ui";

const About = (props) => {
  return (
    <ImageSection>
      <Inner>
        <FlexWrapper>
          <StyledSectionWrapper>
            <StyledSectionHeading text="More About Me" sectionId="about" />
            <GlassWrapper>
              <h4>Hi! I'm a Software Developer located in St. Paul, MN</h4>

              <p>
                Every since I was little I have always enjoyed building things
                and solving problems. With coding I get to do that everyday!
              </p>
              <p>
                I have an associate of applied science in software development
                from DCTC and along with self study have learned many things. I
                primarily work with JavaScript, in either React or Next.js, but
                have also learned and built a few things in C# and Python. I've
                also used a bit of PHP and first learned to code in Java. Being
                able to constantly learn new things is one of my favorite parts
                of programming.
              </p>
              <p>
                When I'm not coding or learning I enjoy reading, playing video
                games with friends, and creating worlds and stories for my d&d
                campaigns. Feel free to contact me with any questions or even
                just to say hello. I always enjoy hearing from new people and
                learning what they are working on!
              </p>
            </GlassWrapper>
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
  background: linear-gradient(
      0deg,
      rgba(3, 3, 5, 1) 1%,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.3)
    ),
    url("/img/space-three.webp");
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
  align-items: center;

  @media ${QUERIES.laptopAndDown} {
    flex-direction: column;
  }
`;

const StyledSectionWrapper = styled.section`
  flex: 1;

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
