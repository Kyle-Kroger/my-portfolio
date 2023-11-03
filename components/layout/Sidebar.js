"use client";
import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import { Home, Envelope, User, ImagePortrait } from "@styled-icons/fa-solid";

import useNavStore from "../../stores/useNavStore";
import { NavFooter, NavLink } from ".";
import { QUERIES } from "../../styles";

const links = [
  { name: "home", icon: () => <Home /> },
  { name: "about", icon: () => <User /> },
  { name: "portfolio", icon: () => <ImagePortrait /> },
  { name: "contact", icon: () => <Envelope /> },
];

const Sidebar = () => {
  const hideSidebar = useNavStore((state) => state.hideSidebar);

  return (
    <SidebarWrapper $hideSidebar={hideSidebar}>
      <StyledNav>
        <ul>
          {links.map((link) => (
            <NavLink key={link.name} name={link.name}>
              {link.icon()}
            </NavLink>
          ))}
        </ul>
      </StyledNav>
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

  transition: left ${(p) => (p.$showSidebar ? "500ms" : "200ms")} ease-in-out;

  @media ${QUERIES.tabetAndDown} {
    left: ${(p) => (p.$hideSidebar ? "calc(var(--sidebar-width) * -1)" : "0")};
  }
`;

const StyledNav = styled.nav`
  margin-top: 4rem;
  width: 100%;
  /* Hidding overflow for the growing hover list items */
  overflow: hidden;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* ul li {
    width: 100%;
    text-align: center;

    transition: all 200ms ease-out;
  }

  ul li:hover {
    background-color: var(--color-primary-700);
    color: white;
    transform: scale(1.1);
  }

  ul li a {
    display: block;
    padding-top: 16px;
    padding-bottom: 16px;
  } */

  ${StyledIconBase} {
    padding-right: 12px;
    color: var(--color-primary-100);
    width: 36px;
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
