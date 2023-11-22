"use client";

import styled from "styled-components";
import { StyledPhotoCard, GlassWrapper } from "../ui";
import { DescriptionBox, TechList, ProjectButtons } from "./project-components";
import { QUERIES } from "../../styles";

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
        <h3>{title}</h3>
        <TechList techStack={techStack} />
      </Title>
      <PhotoCardWrapper>
        <StyledPhotoCard>
          <img src={imgSrc} alt={imgDes} />
        </StyledPhotoCard>
      </PhotoCardWrapper>
      <DescriptionBox>
        <p>{desc}</p>
        <ProjectButtons link={link} gitLink={gitLink} />
      </DescriptionBox>
    </Wrapper>
  );
};

const Wrapper = styled(GlassWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
