import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEnvelope,
  faUser,
  faImagePortrait,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

import { NavFooter } from ".";
import { QUERIES } from "../../constants";
import { useEffect, useState } from "react";

const Sidebar = (props) => {
  const { toggleBackground } = props;
  const [themeIcon, setThemeIcon] = useState(faMoon);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(true);
    const timer = setTimeout(() => {
      setDisabled(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [themeIcon]);

  const changeTheme = () => {
    toggleBackground();
    setThemeIcon((prevIcon) => (prevIcon === faMoon ? faSun : faMoon));
  };

  return (
    <SidebarWrapper showSidebar={props.showSidebar}>
      <StyledNav>
        <ul>
          <a href="#f">
            <li>
              <StyledIcon icon={faHome}></StyledIcon>
              Home
            </li>
          </a>
          <a href="#h">
            <li>
              <StyledIcon icon={faUser}></StyledIcon>
              About
            </li>
          </a>
          <a href="#f">
            <li>
              <StyledIcon icon={faImagePortrait}></StyledIcon>
              Portfolio
            </li>
          </a>
          <a href="#i">
            <li>
              <StyledIcon icon={faEnvelope}></StyledIcon>
              Contact
            </li>
          </a>
        </ul>
      </StyledNav>
      <ThemeButton onClick={changeTheme} disabled={disabled} icon={themeIcon}>
        <ThemeIcon icon={themeIcon}></ThemeIcon>
      </ThemeButton>
      <NavFooterWrapper>
        <NavFooter></NavFooter>
      </NavFooterWrapper>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--sidebar-width, 250px);

  font-size: var(--fz-lg);
  background-color: var(--sidebar-color);
  color: var(--color-grey-100);

  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10000;

  transition: left ${(p) => (p.showSidebar ? "500ms" : "200ms")} ease-in-out;

  @media ${QUERIES.tabetAndDown} {
    left: ${(p) => (p.showSidebar ? "0" : "calc(var(--sidebar-width) * -1)")};
  }
`;

const StyledNav = styled.nav`
  margin-top: 4rem;
  width: 100%;
  /* Hidding overflow for the growing hover list items */
  overflow: hidden;

  a {
    display: block;
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul li {
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    text-align: center;

    transition: all 200ms ease-out;
  }

  ul li:hover {
    background-color: var(--color-primary-700);
    color: white;
    transform: scale(1.1);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  padding-right: 8px;
  color: var(--color-primary-100);
`;

const ThemeIcon = styled(FontAwesomeIcon)`
  font-size: 26px;
  //moving one whole pixel
  transform: ${(p) =>
    p.icon === faMoon ? "translate(2px, 2px)" : "translate(0px, 2px)"};
  border-radius: 40%;
  //transform: translate(2px, 2px);
  transition: color 200ms ease-out;
`;

const ThemeButton = styled.a`
  position: absolute;
  bottom: 80px;
  margin-top: var(--spacing-lg);
  padding: var(--spacing-sm);
  background-color: ${(p) =>
    p.icon === faMoon ? "var(--color-primary-700)" : "#b16f05"};
  border-radius: 40%;
  transition: background-color 600ms ease-out;
  cursor: pointer;

  pointer-events: ${(p) => (p.disabled ? "none" : "auto")};

  &:hover {
    background-color: var(--color-primary-500);
    transition: background-color 200ms ease-out;
  }

  &:hover ${ThemeIcon} {
    color: white;
  }
`;

const NavFooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: var(--spacing-lg);
`;

export default Sidebar;
