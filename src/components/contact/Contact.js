import styled from "styled-components/macro";
import { StyledSection, StyledSectionHeading } from "../ui";

const Contact = (props) => {
  return (
    <StyledSection color="var(--color-primary-A1100)">
      <StyledSectionHeading text="Contact" />
      <p>
        I'm always looking for new opportunities! Feel free to send me a message
        if you want my resume, are looking to build something together, or even
        if its just to say hi! I always loving talking with new and interesting
        people!
      </p>
      <p>
        If you're looking to build a website I would love to help you build the
        one of your dreams! Send me a message with your ideas and I'll respond
        back within 48 hours so we can set up a time to talk
      </p>
    </StyledSection>
  );
};

export default Contact;
