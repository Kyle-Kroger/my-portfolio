import styled from "styled-components/macro";
import { StyledButton, StyledPhotoCard } from "../ui";
import { helpers } from "../../styles";
import { QUERIES } from "../../constants";

const Project = (props) => {
  const { title, imgDes, className } = props;
  return (
    <StyledWrapper className={className}>
      <Title>
        <h3>{title}</h3>
        <ul>
          <li>React</li>
          <li>Styled Components</li>
          <li>HTML</li>
          <li>React</li>
          <li>Styled Components</li>
          <li>HTML</li>
        </ul>
      </Title>
      <PhotoCardWrapper>
        <StyledPhotoCard>
          <a href="#v">
            <img src="http://placekitten.com/800/350" alt={imgDes} />
          </a>
        </StyledPhotoCard>
      </PhotoCardWrapper>
      <DescriptionBox>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            praesentium id autem odio? Maxime deleniti inventore distinctio
            esse, voluptatibus, dignissimos possimus vero, molestias quos sed a
            earum in! Laborum, facere.
          </p>
        </div>
        <StyledButton href="#v" width="40%">
          Learn More
        </StyledButton>
      </DescriptionBox>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  position: relative;
  ${helpers.flexCenter}
  ${helpers.card}
  ${helpers.topBottomBorder("4px", "var(--color-secondary-600)")}
  flex-direction: column;
  background-color: var(--color-primary-A900);
  padding: var(--spacing-lg) var(--spacing-sm);
  max-width: 700px;
`;

const Title = styled.section`
  h3,
  li {
    text-align: center;
  }

  h3 {
    width: 100%;
    color: white;
    border-bottom: 2px solid var(--color-secondary-400);
    padding-bottom: var(--spacing-sm);
  }

  ul {
    ${helpers.flexCenter};
    flex-wrap: wrap;
    column-gap: var(--spacing-xl);
    margin-top: var(--spacing-sm);
  }

  li {
    font-family: "Roboto", "sans-serif";
    color: var(--color-primary-100);
    margin-bottom: var(--spacing-xs);
  }
`;

const PhotoCardWrapper = styled.section`
  padding: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
`;

const DescriptionBox = styled.div`
  ${helpers.flexCenter}
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: var(--spacing-md);
  color: var(--color-primary-100);
  font-size: var(--fz-md);
  background-color: var(--color-primary-A800);

  border-radius: var(--radius-subtle);

  div {
    margin-bottom: var(--spacing-sm);
  }

  @media ${QUERIES.tabetAndDown} {
    position: absolute;
    bottom: var(--spacing-sm);
    width: 90%;
    margin: auto;
    background-color: var(--color-primary-A800T);
  }
`;

export default Project;
