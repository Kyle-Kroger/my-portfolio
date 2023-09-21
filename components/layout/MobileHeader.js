//REMOVE font awesome for styled icons
"use client";
import styled from "styled-components";
import { Bars } from "@styled-icons/fa-solid";
import { QUERIES } from "../../styles";

const MobileHeader = (props) => {
  const { toggleSidebar } = props;

  return (
    <StyledWrapper>
      <StyledBars onClick={toggleSidebar} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: hsl(240, 30%, 7%);
  height: 52px;
  width: 100%;

  display: none;

  @media ${QUERIES.tabetAndDown} {
    display: block;
  }
`;

const StyledBars = styled(Bars)`
  position: absolute;
  padding: 6px 16px;
  right: 0px;
  top: 0px;

  width: 66px;

  font-size: 2.5rem;
  color: var(--color-primary-100);

  transition: color 300ms ease-out;

  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export default MobileHeader;
