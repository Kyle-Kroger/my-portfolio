import styled from 'styled-components/macro';

const StyledSection = styled.section`
  padding: var(--spacing-xxl) var(--spacing-md);
  width: 100%;
  background-color: ${p => p.color ? p.color : 'transparent'};
`;

export default StyledSection;

