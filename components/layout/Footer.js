import styled from "styled-components";
import { helpers } from "../../styles";

const Footer = (props) => {
  return (
    <StyledWrapper>
      <Divider />
      <p>Made and designed by Kyle Kroger - © 2023</p>
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
