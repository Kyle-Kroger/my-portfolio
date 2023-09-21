"use client";

import styled from "styled-components";
import { helpers } from "../../styles";

const Wrapper = styled.div`
  ${helpers.flexCenter}
  padding: var(--spacing-md);
  color: var(--color-text-highlight);
`;

const ContactConfirm = () => {
  return (
    <Wrapper>
      <h2>Thanks for the message!</h2>
    </Wrapper>
  );
};

export default ContactConfirm;
