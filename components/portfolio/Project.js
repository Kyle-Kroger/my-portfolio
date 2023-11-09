"use client";

import styled, { css } from "styled-components";
import { StyledPhotoCard, GlassWrapper, SpaceButton } from "../ui";
import { DescriptionBox, TechList } from "./project-components";
import { helpers, QUERIES } from "../../styles";

const Project = ({
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
        <div>
          <h3>{title}</h3>
          <TechList techStack={techStack} />
        </div>
      </Title>
      <PhotoCardWrapper>
        <StyledPhotoCard>
          <img src="http://placekitten.com/800/450" alt={imgDes} />
        </StyledPhotoCard>
      </PhotoCardWrapper>
      <DescriptionBox>
        <div>
          <p>{desc}</p>
        </div>
        <SpaceButton href="#v">Visit the Site</SpaceButton>
      </DescriptionBox>
    </Wrapper>
  );
};

const Wrapper = styled(GlassWrapper)`
  display: flex;
  flex-direction: column;
  padding-bottom: 0;

  @media ${QUERIES.tabetAndDown} {
    max-width: 850px;
    flex-direction: column;
  }
`;

const Title = styled.section`
  padding: var(--spacing-md);
  padding-bottom: 0;

  h3 {
    width: 100%;
    color: white;
    border-bottom: 3px solid rgba(139, 139, 139, 0.14);
    padding-bottom: var(--spacing-sm);
    text-align: center;
  }
`;

const PhotoCardWrapper = styled.section`
  padding: var(--spacing-md);
  margin: 0 auto;
  max-width: 500px;
`;

export default Project;
