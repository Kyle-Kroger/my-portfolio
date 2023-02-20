import styled from "styled-components/macro";
import { StyledSection, StyledSectionHeading } from "../ui";
import { helpers } from "../../styles";

const Inner = styled.div`
  ${helpers.maxWidthWrapper}
  display: flex;
  flex-direction: column;
  padding: var(--spacing-md) var(--spacing-lg);
  color: var(--color-grey-100);
  font-size: var(--fz-md);

  p {
    font-family: "Roboto", "sans-serif";
  }
`;

const Contact = (props) => {
  return (
    <StyledSection color="linear-gradient(0deg, #0d1330, #0e112a, #0e0e24, #0d0c1f, #0a0919, #070613, #03030b, #050505)">
      <StyledSectionHeading text="Contact" />
      <Inner>
        <p>
          I'm always looking for new opportunities! Feel free to send me a
          message if you want my resume, are looking to build something
          together, or even if its just to say hi! I always loving talking with
          new and interesting people!
        </p>
        <p>
          If you're looking to build a website I would love to help you build
          the one of your dreams! Send me a message with your ideas and I'll
          respond back within 48 hours so we can set up a time to talk
        </p>
      </Inner>
    </StyledSection>
  );
};

export default Contact;
