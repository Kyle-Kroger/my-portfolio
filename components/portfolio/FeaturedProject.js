"use client";

import styled from "styled-components";
import { StyledPhotoCard, GlassWrapper } from "../ui";
import { DescriptionBox, TechList, ProjectButtons } from "./project-components";
import { helpers, QUERIES } from "../../styles";

const FeaturedProject = ({
  title,
  desc,
  techStack,
  imgSrc,
  imgDes,
  link,
  gitLink,
  className,
}) => {
  return (
    <Wrapper className={className}>
      <Title>
        <p>-- Featured Project --</p>
        <h3>{title}</h3>
        <TechList techStack={techStack} />
        <DescriptionBox>
          <p>{desc}</p>
          <ProjectButtons link={link} gitLink={gitLink} />
        </DescriptionBox>
      </Title>
      <PhotoCardWrapper>
        <StyledPhotoCard>
          <img src={imgSrc} alt={imgDes} />
        </StyledPhotoCard>
      </PhotoCardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(GlassWrapper)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);

  @media ${QUERIES.tabetAndDown} {
    max-width: 850px;
    flex-direction: column-reverse;
  }
`;

const Title = styled.section`
  flex: 1;
  ${helpers.flexCenter};
  flex-direction: column;

  & > div {
    ${helpers.flexCenter}
    flex-direction: column;

    @media ${QUERIES.tabetAndDown} {
      margin-top: 0;
    }
  }

  //title text
  h3 {
    width: 100%;
    color: white;
    border-bottom: 3px solid rgba(139, 139, 139, 0.14);
    padding-bottom: var(--spacing-sm);
    text-align: center;
  }

  //Featured Project text
  & > p {
    color: var(--color-text-highlight);
    font-size: clamp(1rem, 2vw + 1rem, 1.4rem);
  }
`;

const PhotoCardWrapper = styled.section`
  margin: 0 auto;
  flex: 1.3;
`;

export default FeaturedProject;
