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
        <StyledButton href="#v" width="30%">
          Learn More
        </StyledButton>
      </DescriptionBox>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  padding: 0;
  background-color: var(--color-primary-A1000);

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
    margin-top: 3vw;

    @media ${QUERIES.tabetAndDown} {
      margin-top: 0;
    }
  }

  h3,
  p {
    text-align: center;
    padding: var(--spacing-md);
  }

  h3 {
    width: 100%;
    color: var(--color-primary-100);
    border-bottom: 4px solid var(--color-primary-A900);
  }

  p {
    font-family: "Roboto", "sans-serif";

    color: var(--color-primary-300);
  }
`;

const PhotoCardWrapper = styled.section`
  flex: 1.2;
  min-width: 40%;
  padding: var(--spacing-lg);
  padding-left: 0;
  padding-bottom: 0;

  @media ${QUERIES.tabetAndDown} {
    padding-left: var(--spacing-lg);
  }
`;

const DescriptionBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: var(--spacing-md);
  padding: var(--spacing-md);
  color: var(--color-primary-100);
  background-color: var(--color-primary-A900);
  font-size: var(--fz-md);
`;

export default FeaturedProject;
