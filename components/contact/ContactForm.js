"use client";

import React, { useState, useRef } from "react";
import styled from "styled-components";
import { SpaceButton } from "../ui";
import emailjs from "@emailjs/browser";

const FormContainer = styled.div`
  max-width: 100%;
  margin: var(--spacing-lg) auto;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ErrorMessage = styled.p`
  color: var(--color-text-error);
`;

const FormInputContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;

  @media (min-width: 550px) {
    width: calc(50% - 5px);
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
`;

const FormTextareaContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  resize: none;
`;

const ContactForm = ({ setShowForm }) => {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    console.log("Submitted:", { name, email, message });
    setShowForm(false);

    // Clear form fields
    setName("");
    setEmail("");
    setMessage("");
    setError("");
  };

  return (
    <FormContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Form ref={form} onSubmit={handleSubmit}>
        <FormInputContainer>
          <FormInput
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormInputContainer>

        <FormInputContainer>
          <FormInput
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormInputContainer>

        <FormTextareaContainer>
          <FormTextarea
            rows="5"
            placeholder="Your Message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormTextareaContainer>

        <SpaceButton as="button" type="submit">
          Submit
        </SpaceButton>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
