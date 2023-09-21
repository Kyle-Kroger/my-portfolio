import styled from "styled-components";
import { QUERIES } from "../../styles";

const PageWrapper = (props) => {
  return (
    <FlexWrapper>
      <SidebarFiller />
      <StyledMain>{props.children}</StyledMain>
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  font-size: var(--fz-lg);
`;

const SidebarFiller = styled.div`
  min-width: var(--sidebar-width);
  flex: 0;
  background-color: red;

  transition: min-width 200ms ease-in-out;

  @media ${QUERIES.tabetAndDown} {
    min-width: 0;
  }
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 100%;
  background-color: var(--main-color);
  min-height: 300vh;
`;

export default PageWrapper;
