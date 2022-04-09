import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { QUERIES } from "../../constants";

const MobileHeader = (props) => {
  const {toggleSidebar} = props;

  return <StyledWrapper>
    <StyledIcon onClick={toggleSidebar} icon={faBars}></StyledIcon>
  </StyledWrapper>;
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

const StyledIcon = styled(FontAwesomeIcon)`
  position: absolute;
  padding: 6px 16px;
  right: 0px;
  top: 0px;

  font-size: 2.5rem; 
  color: var(--color-primary-100);
  
  transition: color 300ms ease-out;

  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export default MobileHeader;
