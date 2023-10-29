"use client";

import styled, { css } from "styled-components";
import { StyledButton, StyledPhotoCard } from "../ui";
import { helpers, QUERIES } from "../../styles";

const Project = (props) => {
  const {
    title,
    desc,
    techStack,
    imgSrc,
    imgDes,
    link,
    gitLink,
    className,
    featured,
  } = props;
  return (
    <StyledWrapper className={className} $featured={featured}>
      <Title $featured={featured}>
        <div>
          {featured && <p>-- Featured Project --</p>}
          <h3>{title}</h3>
          <ul>
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </Title>
      <PhotoCardWrapper $featured={featured}>
        <StyledPhotoCard>
          <img src="http://placekitten.com/800/450" alt={imgDes} />
        </StyledPhotoCard>
      </PhotoCardWrapper>
      <DescriptionBox>
        <div>
          <p>{desc}</p>
        </div>
        <StyledButton href="#v" width="fit-content">
          Learn More
        </StyledButton>
      </DescriptionBox>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 0;

  /* From https://css.glass */
  background: hsla(240, 24%, 11%, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 3px solid rgba(139, 139, 139, 0.14);

  ${(p) =>
    p.$featured &&
    css`
      flex-direction: row;
      flex-wrap: wrap;
      padding: 0;
      width: 100%;
    `}
  @media ${QUERIES.tabetAndDown} {
    max-width: 850px;
    flex-direction: column;
  }
`;

const Title = styled.section`
  padding: var(--spacing-md);
  padding-bottom: 0;

  ${(p) =>
    p.$featured &&
    css`
      flex: 1;
      padding: var(--spacing-lg);
      padding-bottom: 0;
      min-width: 40%;

      div {
        ${helpers.flexCenter}
        flex-direction: column;
        margin-top: 3vw;

        @media ${QUERIES.tabetAndDown} {
          margin-top: 0;
        }
      }
    `}

  h3,
  h4,
  li {
    text-align: center;
  }

  h3 {
    width: 100%;
    color: white;
    border-bottom: 3px solid rgba(139, 139, 139, 0.14);
    padding-bottom: var(--spacing-sm);
  }

  p {
    color: var(--color-text-highlight);
    font-size: clamp(1rem, 2vw + 1rem, 1.4rem);
  }

  ul {
    ${helpers.flexCenter};
    flex-wrap: wrap;
    column-gap: var(--spacing-xl);
    margin-top: var(--spacing-sm);
  }

  li {
    font-family: "Roboto", "sans-serif";
    color: var(--color-grey-200);
    margin-bottom: var(--spacing-xs);
  }
`;

const PhotoCardWrapper = styled.section`
  padding: var(--spacing-md);
  margin: 0 auto;
  max-width: 500px;

  ${(p) =>
    p.$featured &&
    css`
      flex: 1.3;
      min-width: 40%;
      max-width: 650px;
      padding: var(--spacing-lg);
      padding-left: 0;
      padding-bottom: 0;
      margin-bottom: 0;

      @media ${QUERIES.tabetAndDown} {
        padding-left: var(--spacing-lg);
      }
    `}
`;

const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 94%;
  padding: var(--spacing-md);
  padding-top: 0;
  margin: 0 auto;
  margin-top: var(--spacing-md);
  color: var(--color-grey-100);
  border-top: 3px solid rgba(139, 139, 139, 0.14);

  p {
    padding: var(--spacing-md) 0;
  }
`;

export default Project;
