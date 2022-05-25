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
  flex-direction: column;
  padding: var(--spacing-lg) var(--spacing-sm);
  max-width: 700px;
  border-radius: var(--radius-subtle);
  background-color: var(--color-primary-A1000);
`;

const Title = styled.section`
  h3,
  li {
    text-align: center;
  }

  h3 {
    width: 100%;
    color: var(--color-primary-100);
    border-bottom: 4px solid var(--color-primary-A900);
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
    color: var(--color-primary-300);
    margin-bottom: var(--spacing-xs);
  }
`;

const PhotoCardWrapper = styled.section`
  padding: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
`;

const DescriptionBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: var(--spacing-md);
  padding-top: 0;
  color: var(--color-primary-100);
  font-size: var(--fz-md);
  //background-color: var(--color-primary-A900);

  border-radius: var(--radius-subtle);

  div {
    margin-bottom: var(--spacing-sm);
  }
`;

export default Project;
