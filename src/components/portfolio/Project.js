import styled, { css } from "styled-components/macro";
import { StyledButton, StyledPhotoCard } from "../ui";
import { helpers } from "../../styles";
import { QUERIES } from "../../constants";

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
    <StyledWrapper className={className} featured={featured}>
      <Title featured={featured}>
        <div>
          {featured && <h4>-- Featured Project --</h4>}
          <h3>{title}</h3>
          <ul>
            {techStack.map((tech) => (
              <li>{tech}</li>
            ))}
          </ul>
        </div>
      </Title>
      <PhotoCardWrapper featured={featured}>
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
  border-radius: var(--radius-subtle);
  background-color: var(--color-primary-900T);

  ${(p) =>
    p.featured &&
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
    p.featured &&
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
    border-bottom: 3px solid var(--color-primary-500);
    padding-bottom: var(--spacing-sm);
  }

  h4 {
    color: var(--color-text-highlight);
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
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
  }
`;

const PhotoCardWrapper = styled.section`
  padding: var(--spacing-md);
  margin: 0 auto;
  max-width: 550px;

  ${(p) =>
    p.featured &&
    css`
      flex: 1.2;
      min-width: 40%;
      max-width: 1000px;
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
  border-top: 3px solid var(--color-primary-500);

  p {
    padding: var(--spacing-md) 0;
  }
`;

export default Project;
