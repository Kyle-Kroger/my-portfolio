import styled from "styled-components/macro";
import { helpers } from "../../styles";

const StyledSectionHeading = (props) => {
  const { text } = props;
  return (
    <StyledWrapper>
      <h2>{text}</h2>
      <Divider />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  ${helpers.maxWidthWrapper}
  display: flex;
  justify-content: left;
  flex-direction: column;
  text-transform: uppercase;
  font-family: "Lora", "serif";
  padding: 0 var(--spacing-lg);
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--color-primary-500);
  margin-top: 4px;
  margin-bottom: var(--spacing-xl);
`;

export default StyledSectionHeading;
