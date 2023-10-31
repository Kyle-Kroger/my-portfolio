import styled from "styled-components";

const GlassWrapper = styled.section`
  /* From https://css.glass */
  background: hsla(240, 24%, 11%, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  padding: 0.5rem;
  border: 2px solid var(--color-glass-border);
`;

export default GlassWrapper;
