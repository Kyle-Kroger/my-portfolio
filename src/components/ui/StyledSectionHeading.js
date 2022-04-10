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
  ${helpers.flexCenter}
  flex-direction: column;
  text-transform: uppercase;
  font-family: "Lora", "serif";
`;

const Divider = styled.div`
  width: 32%;
  min-width: 250px;
  height: 4px;
  background-color: var(--color-primary-300);
  margin-top: 4px;
  margin-bottom: var(--spacing-xl);
`;

export default StyledSectionHeading;
