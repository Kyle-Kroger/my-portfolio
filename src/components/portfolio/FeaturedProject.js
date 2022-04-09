import styled from "styled-components/macro";
import { helpers } from "../../styles";
import { StyledButton, StyledPhotoCard } from "../ui";

const FeaturedProject = (props) => {
  const { title, imgSrc, imgDes, description, className } = props;
  return (
    <StyledWrapper className={className}>
      <Title>
        <div>
          <h3>{title}</h3>
          <p>React - Styled Components - HTML - CSS</p>
        </div>
      </Title>
      <PhotoCardWrapper>
        <StyledPhotoCard>
          <a href="#v">
            <img src="http://placekitten.com/800/450" alt={imgDes} />
          </a>
        </StyledPhotoCard>
      </PhotoCardWrapper>
      <DescriptionBox>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          praesentium id autem odio? Maxime deleniti inventore distinctio esse,
          voluptatibus, dignissimos possimus vero, molestias quos sed a earum
          in! Laborum, facere.
        </p>
        <ButtonWrapper>
          <StyledButton href="#v">Learn More</StyledButton>
        </ButtonWrapper>
      </DescriptionBox>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  ${helpers.card}
  display: flex;
  position: relative;
  flex-direction: row-reverse;
  ${helpers.topBottomBorder("4px", "var(--color-secondary-600)")}
  width: 100%;
  padding: 0;
  background-color: var(--color-primary-A900);
`;

const Title = styled.section`
  flex: 1;
  padding: var(--spacing-lg);

  div {
    ${helpers.flexCenter}
    height: 50%;
    gap: var(--spacing-md);
    flex-direction: column;
  }

  h3,
  p {
    text-align: center;
    padding: var(--spacing-md);
  }

  h3 {
    width: 100%;
    color: white;
    border-bottom: 2px solid var(--color-secondary-400);
  }

  p {
    width: 80%;
    font-family: "Roboto", "sans-serif";

    color: var(--color-primary-100);
  }
`;

const PhotoCardWrapper = styled.section`
  flex: 1.2;
  padding: var(--spacing-lg);
  padding-bottom: calc(200px - 4vw);
`;

const DescriptionBox = styled.div`
  position: absolute;
  bottom: var(--spacing-lg);
  right: var(--spacing-xxl);
  width: 850px;

  padding: var(--spacing-md);
  color: var(--color-primary-100);
  background-color: var(--color-primary-A800);
  box-shadow: var(--shadow-elevation-medium-dark);
  font-size: var(--fz-md);
  border-radius: var(--radius-subtle);
`;

const ButtonWrapper = styled.div`
  width: 25%;
  margin: auto;
  margin-top: var(--spacing-md);
`;

export default FeaturedProject;
