import styled from "styled-components";

const DescriptionBox = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: var(--spacing-lg);
  width: 100%;
  padding: var(--spacing-md) var(--spacing-sm);
  border-top: 3px solid rgba(139, 139, 139, 0.14);

  font-size: var(--fz-md);
  text-align: left;
  color: var(--color-grey-100);

  p {
    white-space: pre-line;
  }
`;

export default DescriptionBox;
