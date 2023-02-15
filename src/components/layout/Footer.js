import styled from "styled-components/macro";
import { helpers } from "../../styles";

const Footer = (props) => {
  return (
    <StyledWrapper>
      <Divider />
      <p>Made and designed by Kyle Kroger - © 2022</p>
      <p>
        Night photo by{" "}
        <a href="https://unsplash.com/@actionjackson801?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Jackson Hendry
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/night-sky?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
      <p>
        Day Photo by{" "}
        <a href="https://unsplash.com/@agregoire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Alexandre Grégoire
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/sunrise-lake?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.footer`
  ${helpers.flexCenter}
  flex-direction: column;
  width: 100%;
  min-height: 12vh;
  background-color: var(--color-primary-900);
  padding: var(--spacing-lg);

  & > p {
    padding-bottom: var(--spacing-xs);
  }

  a {
    color: var(--color-primary-100);
  }
`;

const Divider = styled.div`
  width: 95%;
  max-width: 500px;
  height: 3px;
  background-color: var(--color-primary-100);
  margin-bottom: var(--spacing-md);
`;

export default Footer;
