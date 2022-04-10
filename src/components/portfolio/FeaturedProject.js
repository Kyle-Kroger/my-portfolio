import styled from "styled-components/macro";
import { QUERIES } from "../../constants";
import { helpers } from "../../styles";
import { StyledButton, StyledPhotoCard } from "../ui";

const FeaturedProject = (props) => {
  const { title, imgSrc, imgDes, description, className } = props;
  return (
    <StyledWrapper className={className}>
      <Title>
        <div>
          <h4>Featured Project</h4>
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
  flex-wrap: wrap;
  position: relative;
  ${helpers.topBottomBorder("4px", "var(--color-secondary-600)")}
  width: 100%;
  padding: 0;
  background-color: var(--color-primary-A900);

  @media ${QUERIES.tabetAndDown} {
    max-width: 800px;
    flex-direction: column;
  }
`;

const Title = styled.section`
  flex: 1;
  padding: var(--spacing-lg);
  padding-bottom: 0;
  min-width: 40%;

  div {
    ${helpers.flexCenter}
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
    font-family: "Roboto", "sans-serif";

    color: var(--color-primary-100);
  }
`;

const PhotoCardWrapper = styled.section`
  flex: 1.2;
  min-width: 40%;
  padding: var(--spacing-lg);
  padding-bottom: 0;
`;

const DescriptionBox = styled.div`
  position: relative;
  bottom: var(--spacing-xl);
  left: var(--spacing-xl);
  min-width: 600px;
  width: 70%;

  padding: var(--spacing-md);
  color: var(--color-primary-100);
  background-color: var(--color-primary-A800);
  box-shadow: var(--shadow-elevation-medium-dark);
  font-size: var(--fz-md);
  border-radius: var(--radius-subtle);

  @media ${QUERIES.tabetAndDown} {
    width: 90%;
    min-width: 400px;
  }
`;

const ButtonWrapper = styled.div`
  width: 40%;
  margin: auto;
  margin-top: var(--spacing-md);
`;

export default FeaturedProject;
