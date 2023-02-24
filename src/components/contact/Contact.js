import { useState } from "react";
import styled from "styled-components/macro";
import { StyledSection, StyledSectionHeading } from "../ui";
import { helpers } from "../../styles";
import ContactForm from "./ContactForm";
import ContactConfirm from "./ContactConfirm";

const Inner = styled.div`
  ${helpers.maxWidthWrapper}
  display: flex;
  flex-direction: column;
  padding: var(--spacing-md) var(--spacing-lg);
  color: var(--color-grey-100);

  p {
    font-family: "Roboto", "sans-serif";
    margin-bottom: var(--spacing-md);
  }
`;

const Contact = (props) => {
  const [showForm, setShowForm] = useState(true);

  return (
    <StyledSection color="linear-gradient(0deg, #0d1330, #0e112a, #0e0e24, #0d0c1f, #0a0919, #070613, #03030b, #050505)">
      <StyledSectionHeading text="Contact" sectionId="contact" />
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
          respond back within 48 hours so we can set up a time to talk.
        </p>
        <p>
          If you prefer to send me a direct email, my email address is
          kyle.s.kroger@gmail.com. I look forward to hearing from you!
        </p>
        {showForm && <ContactForm setShowForm={setShowForm} />}
        {!showForm && <ContactConfirm />}
      </Inner>
    </StyledSection>
  );
};

export default Contact;
